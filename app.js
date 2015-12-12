var quirksOfPortland = angular.module('quirksOfPortland', ['ngRoute', 'ngAnimate']);

quirksOfPortland.config(function($routeProvider) {
    $routeProvider
        //home
        .when('/', {
            templateUrl: 'views/partials/page-home.html',
            controller: 'quirksCtrl'
        })
        //about
        .when('/about/', {
            templateUrl: 'views/partials/page-about.html',
            controller: 'aboutCtrl'
        })
        //contact
        .when('/contact', {
            templateUrl: 'views/partials/page-contact.html',
            controller: 'contactCtrl'
        });
});