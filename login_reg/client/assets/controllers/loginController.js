app.controller('loginModel', ['$scope', 'loginRegFactory', function($scope, friendsFactory){
    friendsFactory.getUser(function(returnedData){
        $scope.friend = returnedData;
        console.log($scope.friend);
    });
}]);
