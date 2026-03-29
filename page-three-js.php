<?php

/**
 * Template Name: Three JS
 */

if (!is_user_logged_in() || !current_user_can('administrator')) {
    wp_redirect(home_url());
    exit;
}

get_header(); ?>

<!-- MAIN -->
<main id="wcl-page-content" class="wcl-page-content wcl-three-js">
    <div class="wcl-three-js__container wcl-container">
        <div id="three-container"></div>
        <?php the_content(); ?>
    </div>
</main>

<?php get_footer(); ?>