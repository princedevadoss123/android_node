// Login Controller
angular.module('androidApp.loginCtrl',[])
  .controller('TableController',function($scope,ergastAPIservice) {
    $scope.onInit = function() {
      $scope.text = 'hello';
      ergastAPIservice.getDrivers().then(function (response) {
        //Dig into the responde to get the relevant data
        $scope.entries = response.data;
    });
    }
});
