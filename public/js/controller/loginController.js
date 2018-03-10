angular.module('androidApp.loginCtrl',[])
  .controller('LoginController',function($scope, AdminService) {
    $scope.onInit = function() {
      $scope.text = 'hello1';
    },
    $scope.signIn = function() {
      var username = $scope.username;
      var password = $scope.password;
      AdminService.getAdmin(username, password).then(function(response) {
        console.log(response.data);
      });
    }
});
