'use strict'

var app = angular.module('app', ['ngRoute']);


app.factory('usersFactory', ['$http', function($http){
    var usersFactory = function() {
        this.login = function(data, callback, errback) {
            $http.post('/login', data).then(callback,errback);
        };

        this.index = function(data, callback, errback){
            $http.get('/users').then(callback, errback);
        };

        this.register = function(data, callback, errback){
            $http.post('/register', data).then(callback, errback);
        };
    };
}]);

app.controller('loginController', ['$scope', 'usersFactory', function($scope, uf){
    $scope.register = function() {
        uf.register($scope.registration, function(data){
            if (data.data.errors) {
                $scope.erros = data.data.errors;
            }
            else {
                $scope.user = data.data;
            }
        });

        $scope.login = function(){
            uF.login(
                $scope.userLogin,
                function(data){
                    if (data.data.errors){
                        $scope.errors = data.data.errors;
                    }
                    else{
                        $scope.user = data.data;
                    }
                },
                function(err){
                    console.log("I am an error",err);
                });
            };
}]);
// app.config(function($routeProvider){
//     $routeProvider
//     .when('/reg',{
//         templateUrl: './../partials/register.html',
//         controller: 'registrationController',
//         controllerAs: 'RC'
//     })
//     .when('/login',{
//         templateUrl: './../partials/login.html',
//         controller: 'loginController',
//         controllerAs: 'LC'
//     })
//     .otherwise('/login');
// });
