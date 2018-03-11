angular.module('androidApp.loginCtrl',[])
  .controller('LoginController',function($scope, AdminService, $window) {
    $scope.onInit = function() {
      $scope.text = 'hello1';
    },
    $scope.signIn = function() {
      $scope.error = '';
      var username = $scope.username;
      var password = $scope.password;
      if(username === undefined) {
        $scope.error = "Please enter user name";
      }
      else if(password === undefined) {
        $scope.error="Please enter a password";
      }
      else {
        AdminService.getAdmin(username, password)
         .then(function(response) {
           if(response.data.length === 0) {
             $scope.error = "Incorrect username/password !";
           }
           else {
             $window.location.href = "/home";
           }
        })
        .catch(function(response){
          $window.location.href = "/error";
        });
      }
  }
});
