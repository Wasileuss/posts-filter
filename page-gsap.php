<?php

/**
 * Template Name: Gsap
 */

if (!is_user_logged_in() || !current_user_can('administrator')) {
    wp_redirect(home_url());
    exit;
}

get_header(); ?>

<!-- MAIN -->
<main id="wcl-page-content" class="wcl-page-content wcl-gsap">
    <div class="wcl-gsap__container wcl-container">
        <div class="wcl-gsap__wrapper">
            <section class="intro">
                <svg class="wcl-animations__title" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
                    <text x="50%" y="50%">GSAP Animations</text>
                </svg>
                <h1>We design spaces that don't just exist</h1>
            </section>
            <section class="cards">
                <div class="card">
                    <div class="card-marquee">
                        <div class="marquee">
                            <h1>Design Beyond Boundaries</h1>
                            <h1>Built for Tomorrow</h1>
                            <h1>Real Impact</h1>
                            <h1>Digital Visions</h1>
                        </div>
                    </div>
                    <div class="card-wrapper">
                        <div class="card-content">
                            <div class="card-title">
                                <h1>Card Title</h1>
                            </div>
                            <div class="card-description">Description here ...</div>
                        </div>
                        <div class="card-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-wrapper">
                        <div class="card-content">
                            <div class="card-title">
                                <h1>Card Title</h1>
                            </div>
                            <div class="card-description">Description here ...</div>
                        </div>
                        <div class="card-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-wrapper">
                        <div class="card-content">
                            <div class="card-title">
                                <h1>Card Title</h1>
                            </div>
                            <div class="card-description">Description here ...</div>
                        </div>
                        <div class="card-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-wrapper">
                        <div class="card-content">
                            <div class="card-title">
                                <h1>Card Title</h1>
                            </div>
                            <div class="card-description">Description here ...</div>
                        </div>
                        <div class="card-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="outro">
                <h1>Architecture reimagined for the virtual age.</h1>
            </section>
        </div>
    </div>
</main>

<?php get_footer(); ?>