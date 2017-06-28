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
.controller('AllChirps', ['$scope', '$http', function($scope, $http) {
    function getChirps() {
        $http.get('/api/chirps/')
        .then(function success(res) {
            $scope.chirps = res.data;
            $scope.message = res.data.message;
            $scope.timestamp = res.data.timestamp;
            $scope.userName = res.data.userName;
        }, function(err) {
            console.log(err);
        });
    }
    getChirps();
}])
.controller('OneChirp', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('/api/chirps/' + $routeParams.id)
    .then(function success(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    });
}])
.controller('ChirpUpdate', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

}])