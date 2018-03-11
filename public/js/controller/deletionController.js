// Main Controller
angular.module('deletion',['customer.services'])
  .controller('DeletionController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
    }
});
