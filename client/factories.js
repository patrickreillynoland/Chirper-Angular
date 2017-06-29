angular.module('Chirper.factories', ['ngRoute', 'ngResource'])
.factory('PutChirp', ['$resource', function($resource) {
     return $resource('http://localhost:3000/api/chirps/:id', { id: '@id' }, {
         update: {
             method: 'PUT'
         }
     });
}])
.factory('Users', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/users/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}])