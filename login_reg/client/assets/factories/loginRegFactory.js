var mongoose = require('mongoose');
var app = angular.module('app', []);

app.factory('loginRegFactory', ['$http', function($http){
    var factory = {};

    factory.reg = function(user){
        $http.post('/reg', user).then(function(returnedData, error){
            if (error) {
                console.log(error);
            }
            else {
                console.log(returnedData.data);
                user.save(returnedData.data);
            }
            return returnedData.data;
        });
        factory.login = function(user){
            $http.post('/login', user).then(function(returnedData, error){
                if (error) {
                    console.log(error);
                }
                else {
                    user.findOne({email:email});
                }
            });
        };
    };
    return factory;
}]);
