angular.module('androidApp.services', [])
  .factory('UserService', function($http) {
    var userAPI = {};

    userAPI.getDrivers = function() {
      return $http({
        method: 'GET',
        url: 'api/customers'
      });
    }
    
    return userAPI;
  });
