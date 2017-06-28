angular.module('Chirper', ['ngRoute'])
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
.controller('WelcomeController', ['$scope', function($scope) {

}])
.controller('AllChirps', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http({
        url: '/api/chirps/',
        method: 'GET'
    }).then(function (payload) {
        $scope.message = payload.data.message;
        $scope.user = payload.data.user;
        $scope.timestamp = payload.data.timestamp;
    }, function (err) {
        console.log(err);
    });
}])
.controller('OneChirp', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http) {

}])
.controller('ChirpUpdate', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

}])