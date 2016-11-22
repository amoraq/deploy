app.controller('loginRegController', ['$scope', 'loginRegFactory', function($scope, loginRegFactory){
    $scope.reg =function(){
        registrationFactory.reg($scope.user)
    }
    $scope.login=function(){
        registrationFactory.login($scope.check)
    }
}]);
