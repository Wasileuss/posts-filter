<?php

add_action('wp_ajax_wcl_load_more', 'wcl_load_more_callback');
add_action('wp_ajax_nopriv_wcl_load_more', 'wcl_load_more_callback');

function wcl_load_more_callback() {
    // Безпека
    if ( ! isset($_POST['nonce']) || ! wp_verify_nonce($_POST['nonce'], 'wcl_load_more_nonce') ) {
        wp_send_json_error(['message' => 'Invalid nonce']);
        wp_die();
    }

    $page     = isset($_POST['page']) ? max(1, intval($_POST['page'])) : 1;
    $category = (isset($_POST['category']) && $_POST['category'] !== '') ? intval($_POST['category']) : '';

    $args = [
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'paged'          => $page,
        'posts_per_page' => intval(get_option('posts_per_page')),
    ];

    if ($category) {
        $args['cat'] = $category;
    }

    $q = new WP_Query($args);

    if ($q->have_posts()) {
        ob_start();
        while ($q->have_posts()) {
            $q->the_post();
            get_template_part('template-parts/content', get_post_type());
        }
        wp_reset_postdata();
        $html = ob_get_clean();

        wp_send_json_success([
            'html'     => $html,
            'max_page' => $q->max_num_pages,
            'page'     => $page,
        ]);
    } else {
        wp_send_json_error(['message' => 'No more posts']);
    }

    wp_die();
}