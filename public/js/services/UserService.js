angular.module('androidApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET',
        url: 'api/customers'
      });
    }

    return ergastAPI;
  });
