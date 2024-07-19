<?php
/**
 * Plugin Name: Outside block
 * Description: A custom block for the outside theme
 * Version: 1.0
 * Author: Outside
 */

function custom_plugin_scripts() {
	wp_enqueue_style(
		'splide-theme-style',
		'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css'
	);

	wp_enqueue_script(
		'splide-js',
		'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
		array(),
		null,
		true
	);

	wp_enqueue_script(
		'outside-init',
		plugin_dir_url( __FILE__ ) . 'assets/outside.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'custom_plugin_scripts' );
add_action( 'enqueue_block_editor_assets', 'custom_plugin_scripts' );

function outside_block_editor_assets() {
	wp_enqueue_script(
		'outside-block',
		plugin_dir_url( __FILE__ ) . 'build/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js' )
	);

	wp_enqueue_style(
		'outside-block-editor',
		plugins_url( 'build/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'outside_block_editor_assets' );

function outside_block_init() {
	wp_register_style(
		'outside-block',
		plugins_url( 'build/style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);

	register_block_type(
		'outside/outside-block',
		array(
			'editor_script' => 'outside-block',
			'editor_style'  => 'outside-block-editor',
			'style'         => 'outside-block',
		)
	);
}
add_action( 'init', 'outside_block_init' );

function localize_attributes() {
	wp_localize_script(
		'outside-init',
		'blockAttributes',
		array(
			'autoplay' => get_option( 'autoplay', true ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'localize_attributes' );
