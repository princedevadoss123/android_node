// Main Controller
angular.module('main',['customer.services'])
  .controller('MainController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
    }
});
