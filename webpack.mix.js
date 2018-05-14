let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .scripts([
   	  'resources/assets/angular/*.js',
   	  'resources/assets/angular/service/*.js',
   	  'resources/assets/angular/controller/*.js',
   	  'resources/assets/angular/component/*.js'],
   	'public/angular.js')
   .copy(['resources/assets/angular/component/*.html'], 'public/tmpl')
   .copy(['resources/assets/img/*.jpg'], 'public/img')
   .sass('resources/assets/sass/app.scss', 'public/css');
