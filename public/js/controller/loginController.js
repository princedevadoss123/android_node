angular.module('androidApp.loginCtrl',[])
  .controller('LoginController',function($scope) {
    $scope.onInit = function() {
      $scope.text = 'hello';
    }
});
