<?php

/**
 * Template Name: Animations
 */

if (!is_user_logged_in() || !current_user_can('administrator')) {
    wp_redirect(home_url());
    exit;
}

get_header(); ?>

<!-- MAIN -->
<main id="wcl-page-content" class="wcl-page-content wcl-animations">
    <div class="wcl-animations__container wcl-container">
        <svg class="wcl-animations__title" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
            <text x="50%" y="50%">CSS Animations</text>
        </svg>

        <h1 class="draw-title">GSAP Animations For Responsive Websites - H1</h1>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dapibus purus. Donec vitae diam id magna
            euismod elementum. Nam ligula elit, eleifend aliquet dignissim vel, semper placerat massa. Sed non leo nec
            libero faucibus pulvinar. Suspendisse pulvinar orci vitae arcu iaculis, et convallis felis fermentum. Donec
            ac elit arcu. In pulvinar est nisl, ut faucibus urna consequat eget. Maecenas sodales rutrum tortor, in
            posuere ante viverra nec. Etiam consequat convallis sapien at convallis. Donec placerat, orci sit amet
            faucibus vehicula, enim mauris gravida urna, quis pharetra tellus nisl non dui. Ut vitae arcu quis risus
            vulputate ullamcorper. Vestibulum luctus turpis nec ornare ullamcorper. Donec maximus fringilla sem vel
            placerat.

            Nulla mollis nunc et urna imperdiet commodo eget ac ex. Cras ut mi in ante gravida fringilla a facilisis
            ipsum. Fusce in sagittis sem, vitae dapibus elit. Fusce viverra magna eget ex pretium rhoncus. Nunc eu
            pellentesque tortor. Phasellus congue interdum dui, id convallis enim consequat eu. Aliquam eu sapien
            aliquet, tincidunt nisl gravida, placerat ipsum. Suspendisse maximus sollicitudin sapien et suscipit.
            Pellentesque blandit pellentesque justo vitae aliquam.

            Nullam sed bibendum nisl. Cras fermentum lacus et nisl dapibus, nec facilisis augue sollicitudin. Maecenas
            nec porttitor sapien. Nunc eleifend tortor ac consectetur vulputate. Nam bibendum mi urna. Suspendisse
            efficitur non sem et ultricies. Donec augue lorem, placerat non dictum sed, imperdiet vitae mauris. Sed sed
            efficitur turpis, ut dictum elit. Pellentesque iaculis in turpis ac iaculis. Quisque efficitur ligula at
            pulvinar lobortis. Integer et mauris ac risus efficitur vehicula eget sit amet tortor. Integer maximus a dui
            sit amet facilisis. Curabitur maximus, diam eget aliquet faucibus, velit justo finibus lacus, id feugiat
            augue massa vitae odio. Morbi mollis hendrerit ex, et tempus odio malesuada in.

            Donec vitae porta dui. Aliquam tristique magna eget libero congue, quis euismod neque euismod. Suspendisse
            gravida sapien nec euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. In eget porttitor magna. Aliquam eleifend non diam in malesuada. Sed mattis, justo at
            volutpat malesuada, nibh purus imperdiet sem, id efficitur erat felis a sem. Praesent ornare, elit sit amet
            placerat dapibus, purus sapien scelerisque eros, id imperdiet lectus diam at lectus. Duis erat tortor,
            ultrices vitae luctus ac, posuere a neque. Quisque eleifend elit in quam rhoncus dictum. Vivamus blandit
            felis sit amet enim aliquet, tristique vehicula tellus tristique. Morbi vitae velit ex. Sed sit amet varius
            purus, vel condimentum erat. In et quam eu lectus feugiat imperdiet eu volutpat neque. Vestibulum quis
            molestie ante, nec rhoncus mauris.

            Etiam malesuada metus sit amet massa lacinia consequat. Nulla maximus molestie urna egestas lobortis. Morbi
            nec sagittis sapien. Morbi gravida commodo dolor, sed dictum turpis congue non. In tincidunt mi sapien, a
            fringilla nisl blandit vel. Aenean id lacus id felis fermentum iaculis. Praesent bibendum dolor vel egestas
            pretium. Phasellus nulla leo, faucibus sit amet nisi imperdiet, porttitor ultricies odio. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam non convallis nibh.
            Vestibulum finibus urna justo, non eleifend velit convallis id. Aenean ut ligula risus. Aliquam placerat
            tempus varius.
        </div>

        <h2 class="draw-title">GSAP Animations For Responsive Websites - H2</h2>

        <div class="cards-wrapper">
            <div class="card-container card-amimated">
                <div class="card-body">
                    <div class="card-item thumbnail" data-translate-z="50">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap1.png" alt="Thumbnail" />
                    </div>
                    <h2 class="card-item" data-translate-z="75">
                        Make things float in air
                    </h2>
                    <p class="card-item" data-translate-z="40">
                        Hover over this card to unleash the power of CSS perspective
                    </p>
                </div>
            </div>
            <div class="card-container card-amimated">
                <div class="card-body">
                    <div class="card-item thumbnail" data-translate-z="50">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap2.png" alt="Thumbnail" />
                    </div>
                    <h2 class="card-item" data-translate-z="75">
                        Make things float in air
                    </h2>
                    <p class="card-item" data-translate-z="40">
                        Hover over this card to unleash the power of CSS perspective
                    </p>
                </div>
            </div>
            <div class="card-container card-amimated">
                <div class="card-body">
                    <div class="card-item thumbnail" data-translate-z="50">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap3.png" alt="Thumbnail" />
                    </div>
                    <h2 class="card-item" data-translate-z="75">
                        Make things float in air
                    </h2>
                    <p class="card-item" data-translate-z="40">
                        Hover over this card to unleash the power of CSS perspective
                    </p>
                </div>
            </div>
            <div class="card-container card-amimated">
                <div class="card-body">
                    <div class="card-item thumbnail" data-translate-z="50">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cap1.png" alt="Thumbnail" />
                    </div>
                    <h2 class="card-item" data-translate-z="75">
                        Make things float in air
                    </h2>
                    <p class="card-item" data-translate-z="40">
                        Hover over this card to unleash the power of CSS perspective
                    </p>
                </div>
            </div>
        </div>



        <h2 class="draw-title">Three JS Animations For Responsive Websites - H2</h2>

        <div class="wcl-animations__section">
            <div class="wcl-animations__section-content">
                <h3 class="wcl-animations__section-title">Three JS Scene</h3>
                <div class="wcl-animations__section-text">Nulla mollis nunc et urna imperdiet commodo eget ac ex. Cras ut mi in ante gravida fringilla a
                    facilisis
                    ipsum. Fusce in sagittis sem, vitae dapibus elit. Fusce viverra magna eget ex pretium rhoncus. Nunc
                    eu
                    pellentesque tortor. Phasellus congue interdum dui, id convallis enim consequat eu. Aliquam eu
                    sapien
                    aliquet, tincidunt nisl gravida, placerat ipsum. Suspendisse maximus sollicitudin sapien et
                    suscipit.
                    Pellentesque blandit pellentesque justo vitae aliquam.</div>
            </div>
            <div class="wcl-animations__section-canvas" id="three-test"></div>
        </div>

        <?php the_content(); ?>
    </div>
</main>

<?php get_footer(); ?>