angular.module('ArtistCtrl', []).controller('ArtistController', function($scope, $http) {

	$scope.tagline = 'The square root of life is pi!';	
	$http.get('/api/artists').success(function(data){
		console.log(data);
		$scope.artists = data;
	});

	console.log($scope.tagline);
});