document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.wcl-posts-grid');
    if (grid) {
        new Masonry(grid, {
            itemSelector: '.wcl-post-item',
            percentPosition: true,
            gutter: 10
        });
    }
});