angular.module('Chirper.controllers', ['ngRoute', 'ngResource', 'Chirper.factories'])
.controller('WelcomeController', ['$scope', function($scope) {

}])
.controller('AllChirps', ['$scope', 'PutChirp', 'Users', function($scope, PutChirp, Users) {
    $scope.chirps = PutChirp.query(); 
    $scope.users = Users.query();
    $scope.createChirp = function() {
        console.log($scope.NewMessage);
        console.log($scope.NewName);
        var c = new Chirp({
            message: $scope.NewMessage,
            user: $scope.NewName,
            timestamp: '9999-12-12 01:02:03'
        });

        c.$save(function(success) {
            alert('Chirp saved!');
            $scope.chirps = PutChirp.query();
            $scope.NewMessage = '';
            $scope.NewName = '';
        }, function(err) {
            console.log(err);
        });
    } 
}])
.controller('OneChirp', ['$scope', '$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
    $http.get('/api/chirps/' + $routeParams.id)
    .then(function success(res) {
        $scope.id = $routeParams.id;
        $scope.message = res.data.message;
        $scope.timestamp = res.data.timestamp;
        $scope.userName = res.data.userName;
        $scope.deleteChirp = function(id) {
            $http({
                method: 'DELETE',
                url: '/api/chirps/' + $routeParams.id
            }).then(function success(res) {
                $location.path("/chirps");
                alert('Chirp removed');
            }, function(err) {
                console.log(err);
            });
        }
    }, function(err) {
        console.log(err);
    });
}])
.controller('ChirpUpdate', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

}])