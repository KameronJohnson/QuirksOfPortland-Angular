var quirksOfPortland = angular.module('quirksOfPortland', ['ngRoute', 'ngAnimate']);

quirksOfPortland.config(function($routeProvider) {
    $routeProvider
        //home
        .when('/', {
            templateUrl: 'views/partials/page-home.html',
            controller: 'QuirksCtrl'
        })
        //about
        .when('/about/', {
            templateUrl: 'views/partials/page-about.html',
            controller: 'AboutCtrl'
        })
        //contact
        .when('/contact', {
            templateUrl: 'views/partials/page-contact.html',
            controller: 'ContactCtrl'
        });
});