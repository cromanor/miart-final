
angular.module('ArtistService', []).factory('Artist', ['$http', function($http) {

	return {
		// call to get all Artists
		get : function() {
			var temp = $http.get('/api/artists');

			return $http.get('/api/artists');
		},

		// call to POST and create a new Artist
		create : function(artistData) {
			return $http.post('/api/artists', artistData);
		},

		// call to DELETE an Artist
		delete : function(id) {
			return $http.delete('/api/artists/' + id);
		}
	}
	
}]);

