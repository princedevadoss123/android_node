angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })
    .when('/table',{
      templateUrl: 'partials/tableContent.html',
      controller: 'TableController'
    })
    .when('/home',{
      templateUrl:'partials/home.html',
      controller:'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
