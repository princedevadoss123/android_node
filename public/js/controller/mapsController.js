// Main Controller
angular.module('maps',['customer.services'])
  .controller('MapsController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
    }
});
