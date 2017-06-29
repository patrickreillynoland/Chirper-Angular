angular.module('Chirper', ['ngRoute', 'ngResource', 'Chirper.controllers', 'Chirper.factories', 'Chirper.services'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/chirps', {
        templateUrl: 'views/allchirps.html',
        controller: 'AllChirps'
    })
    .when('/chirps/:id', {
        templateUrl: 'views/chirp.html',
        controller: 'OneChirp'
    })
    .when('/chirps/:id/update', {
        templateUrl: 'views/update.html',
        conroller: 'ChirpUpdate'
    })
    .otherwise({
        redirectTo: '/'
    });
}])