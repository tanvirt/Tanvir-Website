angular.module('main').config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/components/about/aboutView.html',
        controller: 'AboutController'
    });

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'app/components/contact/contactView.html',
        controller: 'ContactController'
    });

    $stateProvider.state('404', {
        url: '/404',
        templateUrl: 'app/components/error/errorView.html',
        controller: 'ErrorController' 
    });

    $urlRouterProvider.otherwise('404');

});
