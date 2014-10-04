angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: '/views/main.html',
			controller: 'HomeController'
		})
		.when('/artists', {
			templateUrl: '/views/artists.html',
			controller: 'ArtistController'	
		})
		.when('/trivia', {
			templateUrl: '/views/trivia.html',
			controller: 'TriviaController'	
		})
/*		.when('/galleries', {
			templateUrl: '/views/gallery.html',
			controller: 'mainCtrl'	
		})
	.when('/map', {
			templateUrl: '/views/map.html',
			controller:'MainController'
		})*/;

	$locationProvider.html5Mode(true);

}]);

