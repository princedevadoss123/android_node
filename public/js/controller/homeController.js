angular.module('androidApp.homeCtrl',[])
  .controller('HomeController',function($scope, AdminService) {
    $scope.onInit = function() {
      $scope.text = 'hello1';
    }
});
