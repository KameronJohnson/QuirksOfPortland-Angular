var quirksOfPortland = angular.module('quirksOfPortland', ['ngRoute', 'ngAnimate']);

quirksOfPortland.config(function($routeProvider) {
    $routeProvider
    //home
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'quirksCtrl'
        })
        //about
        .when('/about/', {
            templateUrl: 'page-about.html',
            controller: 'aboutCtrl'
        })
        //contact
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactCtrl'
        });
});