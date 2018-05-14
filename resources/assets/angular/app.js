// Define the `phonecatApp` module
var cnApp = angular.module('cnApp', ['ui.bootstrap', 'ngResource'], function($interpolateProvider) {
  $interpolateProvider.startSymbol('<%');
  $interpolateProvider.endSymbol('%>');
});
