// Table Controller
angular.module('customer',['customer.services'])
  .controller('TableController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
  }
});
