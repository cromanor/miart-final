angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';	
	

	var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(25.796997, -80.189536),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var Markers =[];

    $http.get('/api/museums').success(function(data){
		console.log(data);
		$scope.points = data;

	
		var marker;
		 
		 var   infowindow = new google.maps.InfoWindow();
		 for(var i=0; i < data.length; i++){

	    	 marker = new google.maps.Marker({
			    position: new google.maps.LatLng(data[i].lat,data[i].long),
			    animation: google.maps.Animation.DROP,
			    map: $scope.map,
			    title:"Museum: "+data[i].Name,
			});

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
		        return function() {
		          infowindow.setContent('<div id="content">'+
			      '<div id="siteNotice">'+
			      '</div>'+
			      '<h1 id="firstHeading" class="firstHeading">'+data[i].Name+'</h1>'+
			      '<div id="bodyContent">'+
			      '<p><b>'+data[i].Name+': '+data[i].About_the_Museum+'</p>'+
			      '<p>For more info, visit: <a href="http://'+data[i].Link+'">'+data[i].Name+'</a> </p>'+
			      '</div>'+
			      '</div><h6>Category: '+data[i].Category+'</h6>');
		          infowindow.open($scope.map, marker);
		        }
		      })(marker, i));
			Markers.push(marker);

    	}
	});
 //    var marker = new google.maps.Marker({
	//     position: new google.maps.LatLng(25.796997, -80.189536),
	//     animation: google.maps.Animation.DROP,
	//     map: $scope.map,
	//     title:"Here!"
	// });

	

   
   



	
});