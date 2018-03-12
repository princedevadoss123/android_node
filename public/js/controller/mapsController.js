// Main Controller
angular.module('maps', ['uiGmapgoogle-maps'])
    .controller('MapsController', function($scope) {
    var marker = [
      {
        id:1,
        latitude: 28.613939,
        longitude: 77.209021,
        icon: "http://maps.google.com/mapfiles/ms/icons/red.png",
      },
      {
        id:2,
        latitude: 12.966043,
        longitude: 77.712172,
        icon: "http://maps.google.com/mapfiles/ms/icons/red.png",
      },
      {
        id:3,
        latitude: 13.120909,
        longitude: 80.066329,
          icon: "http://maps.google.com/mapfiles/ms/icons/red.png",
      },
      {
        id:4,
        latitude: 29.097314,
        longitude: 77.405785,
          icon: "http://maps.google.com/mapfiles/ms/icons/red.png",
      }
    ];

    $scope.map = {
      center: {
        latitude: 13.120909,
        longitude: 80.066329
      },
      zoom: 4,
      bounds: {},
      markers: [],
      options: {
        mapTypeControl: true,
        zoomControl: true,
        streetViewControl: true,
        scrollwheel: true
      }
    };
$scope.map.markers = marker;
  });
