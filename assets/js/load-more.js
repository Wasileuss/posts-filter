document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('wcl-posts-grid');
    const loadMoreBtn = document.getElementById('wcl-load-more');
    const filterBtns = document.querySelectorAll('.wcl-filter-btn');

    if (!grid || !loadMoreBtn) {
        console.warn('Required elements missing');
        return;
    }

    if (typeof config === 'undefined') {
        console.error('config not found');
        return;
    }

    let currentPage = parseInt(loadMoreBtn.dataset.page, 10) || 2;
    let maxPage = null;
    let currentCategory = '';
    let isLoading = false;

    const msnry = new Masonry(grid, {
        itemSelector: '.wcl-post-item',
        percentPosition: true,
        gutter: 16,
    });

    imagesLoaded(grid, () => msnry.layout());

    function loadPosts({ page = 1, category = '', replace = false } = {}) {
        if (isLoading) return Promise.resolve();
        isLoading = true;
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'Loading...';

        const params = new URLSearchParams({
            action: 'wcl_load_more',
            nonce: config.nonce,
            page: page,
            category: category
        });

        return fetch(config.ajax_url, {
            method: 'POST',
            body: params
        })
        .then(res => res.json())
        .then(json => {
            if (!json) throw new Error('Empty response');

            if (json.success) {
                if (replace) {
                    const existingItems = grid.querySelectorAll('.wcl-post-item');
                    if (existingItems.length) {
                        msnry.remove(Array.from(existingItems));
                        msnry.layout();
                    }
                    currentPage = page + 1;
                } else {
                    currentPage = page + 1;
                }

                const frag = document.createRange().createContextualFragment(json.data.html);
                const newElems = Array.from(frag.querySelectorAll('.wcl-post-item'));

                grid.appendChild(frag);

                imagesLoaded(grid, () => {
                    if (newElems.length) {
                        msnry.appended(newElems);
                    }
                    msnry.layout();
                });

                maxPage = json.data.max_page ? parseInt(json.data.max_page, 10) : maxPage;

                if (maxPage !== null && currentPage > maxPage) {
                    loadMoreBtn.style.display = 'none';
                } else {
                    loadMoreBtn.style.display = 'inline-block';
                    loadMoreBtn.disabled = false;
                    loadMoreBtn.textContent = 'Load More';
                }
            } else {
                console.warn(json.data?.message || 'No more posts');
                loadMoreBtn.style.display = 'none';
            }
        })
        .catch(err => {
            console.error('loadPosts error:', err);
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = 'Load More';
        })
        .finally(() => {
            isLoading = false;
        });
    }

    loadMoreBtn.addEventListener('click', () => {
        loadPosts({ page: currentPage, category: currentCategory, replace: false });
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCategory = btn.dataset.category || '';

            currentPage = 1;
            maxPage = null;
            loadMoreBtn.style.display = 'inline-block';
            loadPosts({ page: 1, category: currentCategory, replace: true });
        });
    });
});