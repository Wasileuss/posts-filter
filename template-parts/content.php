<article class="wcl-post-item">
    <?php if (has_post_thumbnail()): ?>
        <a href="<?php the_permalink(); ?>" class="wcl-post-thumb">
            <?php the_post_thumbnail('medium'); ?>
            <div class="wcl-post-overlay">
                <h2 class="wcl-post-title"><?php the_title(); ?></h2>
            </div>
        </a>
    <?php endif; ?>
</article>