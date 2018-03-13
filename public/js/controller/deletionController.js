// Main Controller
angular.module('deletion',['customer.services'])
  .controller('DeletionController',function($scope,UserService,$window) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      UserService.getUsers().then(function (response) {
        $scope.entries = response.data;
    });
  },
  $scope.GetDetails = function (index) {
                var name = $scope.entries[index].name;
                var email = $scope.entries[index].email;
                $window.alert("Name: " + name + "\nEmail: " + email);
            };
});
