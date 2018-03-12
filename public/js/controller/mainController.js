// Main Controller
angular.module('main',['customer.services'])
  .controller('MainController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
    $scope.switchMap = true;
    $scope.switchTable = false;
    $scope.switchDelete = false;
  },
  $scope.customerOnClick = function(){
    console.log("hello");
  }
});
