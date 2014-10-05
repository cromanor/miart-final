var miartApp = angular.module('miartApp', ['google-maps']);

miartApp.controller('MapCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.map = {
	    center: {
	        latitude: 45,
	        longitude: -73
	    },
	    zoom: 8
	};
});