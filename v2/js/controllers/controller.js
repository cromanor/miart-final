<<<<<<< HEAD
define(["../angular.min"], function(angular) {
	var miartApp = angular.module('miartApp', []);
    console.log('In controller.js');
	miartApp.controller('MapCtrl', function ($scope) {
	  $scope.phones = [
	    {'name': 'Nexus S',
	     'snippet': 'Fast just got faster with Nexus S.'},
	    {'name': 'Motorola XOOM™ with Wi-Fi',
	     'snippet': 'The Next, Next Generation tablet.'},
	    {'name': 'MOTOROLA XOOM™',
	     'snippet': 'The Next, Next Generation tablet.'}
	  ];
	});
=======
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
  
>>>>>>> 97cb4f903fe37ee925d579148b32bae750ed5171
});