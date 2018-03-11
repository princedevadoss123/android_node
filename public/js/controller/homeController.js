angular.module('home',[])
  .controller('HomeController',function($scope) {
    $scope.onInit = function() {
      $scope.text = 'hello1';
    }
});
