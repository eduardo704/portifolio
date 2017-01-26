'use strict';

// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.slidesComponent', 
  'ngMaterial',
 'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if( angular.isUndefined(input)){
          return;
        }       
        return input.slice(start);
    }
});
