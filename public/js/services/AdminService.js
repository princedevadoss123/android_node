angular.module('login.services', [])
  .factory('AdminService', function($http) {
    var adminAPI = {};

    adminAPI.getAdmin = function(username, password) {
      return $http({
        method: 'GET',
        url: 'api/admin/' + username + '/' + password
      });
    }

    return adminAPI;
  });
