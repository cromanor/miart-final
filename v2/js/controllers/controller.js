var miartApp = angular.module('miartApp', ['google-maps']);

miartApp.controller('MapCtrl', function ($scope, $http) {
	
  $scope.map = {
    center: {
        latitude: 25.796997,
        longitude:  -80.189536
    },
    zoom: 14
	};

	$http.get('http://miami2014-miart.rhcloud.com/api/pois').success(function(data) {
		console.log(data);
		$scope.pois = data;
	});
});