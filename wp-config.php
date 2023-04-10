<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'orb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&]9}V(9Z+)e0q+LJBj:Jg#^r/xoDhs)3+P#q.Wqr<>H/JWqiZzA{hx/_t=`HXm%r' );
define( 'SECURE_AUTH_KEY',  'YnIUV}=$i1J1X6JQ]3K=nbPS(-gkN@AwGT;Z}GEIJ}dz^^Xd?Lh$pcl@k<!Bz53}' );
define( 'LOGGED_IN_KEY',    'x$%aofL}_YmzWL,`6~+.dEYKT^($eL)[0vL|0[V+*!@GI1ly$!u<1].g-,W28JwJ' );
define( 'NONCE_KEY',        '-|E_3*bk(Grn4L>QwYqT1^&e1##n,Y>h<9T]#ebxPCm#oym8wX@fdsDy|jls^PV9' );
define( 'AUTH_SALT',        'F?5.B SUD?Z3fpXT&+fOYC,t7WKUb+T!d0(6?71aTfm}qX0tJ=vmqI30+lD{MR@N' );
define( 'SECURE_AUTH_SALT', 'A  12}^3,0tw0;)<&Ap?jJpqw0]4yC{%5Sx;f~`Un5ph5A@`|~1,v1eoH]}LlQ_g' );
define( 'LOGGED_IN_SALT',   '4ivM+8 @ZzEI3GX*l]e4PLZ 0,zwa+a[vd6~iZhz^T)7fk>/vD6:yg#u}{d(v]|{' );
define( 'NONCE_SALT',       't3`A.6GpKD/M~W?eq^5T7e`O4aN,Z;(at/:9KF$]!N>xx0i*^W:[DzFjSvq@#r1P' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
