// Main Controller
angular.module('main',['customer.services'])
  .controller('MainController',function($scope,UserService) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      $scope.switchMap = true;
      $scope.switchTable = false;
      $scope.switchDelete = false;
      $(document).ready(function(){
        $('.nav li span').click(function(event){
          $('.active').removeClass('active');
          $(this).addClass('active');
        });
      });
    },
    $scope.customerOnClick = function(){
      console.log("hello");
    }
});
