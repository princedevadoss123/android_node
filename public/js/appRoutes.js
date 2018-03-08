angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'partials/tableContent.html',
      controller: 'TableController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
