angular.module('customer.services', [])
  .factory('UserService', function($http) {
    var userAPI = {};

    userAPI.getUsers = function() {
      return $http({
        method: 'GET',
        url: 'api/customers'
      });
    }

    return userAPI;
  });
