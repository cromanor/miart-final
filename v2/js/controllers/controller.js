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
});