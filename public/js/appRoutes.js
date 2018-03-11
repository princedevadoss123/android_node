angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })
    .when('/main',{
      templateUrl: 'partials/main.html',
      controller: 'MainController'
    })
    .when('/maps',{
      templateUrl: 'partials/maps.html',
      controller: 'MapsController'
    })
    .when('/deletion',{
      templateUrl: 'partials/deletion.html',
      controller: 'DeletionController'
    })
    .when('/table',{
      templateUrl: 'partials/tableContent.html',
      controller: 'TableController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
