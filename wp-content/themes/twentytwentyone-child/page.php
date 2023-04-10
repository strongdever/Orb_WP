<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Orb</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php echo get_theme_file_uri(); ?>/assets/css/style.css">
	<script src="<?php echo get_theme_file_uri(); ?>/assets/js/custom.js"></script>
</head>
<?php
while ( have_posts() ) :
    the_post();
    the_content();
endwhile;
?>
</html>