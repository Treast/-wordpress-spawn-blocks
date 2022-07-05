<?php

/**
 * Plugin Name:       Spawn Blocks
 * Description:       Plugins contenant les blocs personnalisés Gutenberg du site
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Vincent Riva
 * Text Domain:       spawn-blocks
 * Author URI:        https://www.vincentriva.fr
 * GitHub Plugin URI: https://github.com/Treast/wordpress-spawn-blocks
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/app/Blocks.php';

use Spawn\Blocks;

$blocks = new Blocks();
$blocks->add_block('spawn-blocks/section-encart');

$blocks->init();
