// Table Controller
angular.module('androidApp.tableCtrl',[])
  .controller('TableController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
    }
});
