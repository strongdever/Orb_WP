
<?php
add_shortcode('url', function ( $atts ) {
    if(isset($atts['arg'])) {
        return site_url($atts['arg']);
    }
    return get_theme_file_uri();
} );

remove_filter('term_description','wpautop');
remove_filter( 'the_content', 'wpautop' );