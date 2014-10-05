var miartApp = angular.module('miartApp', ['google-maps']);

miartApp.controller('MapCtrl', function ($scope) {
	
  $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
};

});