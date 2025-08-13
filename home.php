<?php get_header(); ?>

<?php
$cats = get_categories();
// $post_count = wp_count_posts('post')->publish;
?>

<main class="wcl-page-content">
    <div class="wcl-blog wcl-container">
        <div class="wcl-posts-filter">
            <button class="wcl-filter-btn wcl-button active" data-category="">All</button>
            <?php foreach ($cats as $c): ?>
                <button class="wcl-filter-btn wcl-button" data-category="<?php echo esc_attr($c->term_id); ?>">
                    <?php echo esc_html($c->name); ?>     <?php if ($c->count > 0): ?>
                        (<?php echo esc_html($c->count); ?>)<?php endif; ?>
                </button>
            <?php endforeach; ?>
        </div>

        <div class="wcl-posts-grid" id="wcl-posts-grid">
            <?php
            $ppp = get_option('posts_per_page');
            $args = ['post_type' => 'post', 'posts_per_page' => $ppp, 'paged' => 1];
            $loop = new WP_Query($args);
            if ($loop->have_posts()):
                while ($loop->have_posts()):
                    $loop->the_post();
                    get_template_part('template-parts/content', get_post_type());
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>

        <div class="wcl-posts-actions">
            <button class="wcl-load-more wcl-button" id="wcl-load-more" data-page="2">Load More</button>
        </div>
    </div>
</main>

<?php get_footer(); ?>