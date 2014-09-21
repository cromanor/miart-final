var mainApp = angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'ArtistCtrl', 'ArtistService','google-maps']);

var markers = [];
mainApp.controller('HomeController', function($scope, $http) {

        var mapOptions = {
	        zoom: 13,
	        center: new google.maps.LatLng(25.796997, -80.189536),
	        mapTypeId: google.maps.MapTypeId.TERRAIN
	    }

    	$scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

         $http.get('/api/pois').success(function(data){
         	console.log(data);
			$scope.points = data;
	    	
	         var marker;
	       

	         

			 var infowindow = new google.maps.InfoWindow();
			 for(var i=0; i < data.length; i++){
			 	var image;
			 	var facts = '';
	    	 	var height = '';

	         if(data[i].type == "museum"){
	         	 image = 'img/museum.png';
	         }else if(data[i].type == "building"){
	         	 image = 'img/building.png';

	         }else{
	         	 image = 'img/paintbrush.png';
	         }

			 	if (data[i].Type == 'Artist') continue;
	    	 	marker = new google.maps.Marker({
				    position: new google.maps.LatLng(data[i].lat,data[i].long),
				    animation: google.maps.Animation.DROP,
				    map: $scope.map,
				    title:data[i].type+": "+data[i].Name,
				    icon:image,
				});

	    	 	
				if (data[i].type == "building"){
					facts += '<p>Facts: '+data[i].Facts+'</p>';
					height += '<p>Height: '+data[i].Height+'</p>';

				}else{
					facts='';
					height='';
				}
				console.log(height+"-");

				google.maps.event.addListener(marker, 'click', (function(marker, i) {
			        return function() {
			          
			        if(data[i].type == 'building'){	
			          infowindow.setContent('<div id="content">'+
				      '<div id="siteNotice">'+
				      '</div>'+
				      '<h1 id="firstHeading" class="firstHeading">'+data[i].Name+'</h1>'+
				      '<div id="bodyContent">'+
				      '<p><b>'+data[i].Name+': '+data[i].Location+'</p>Facts: '+data[i].Facts+'<br/>Height: '+data[i].Height+
				      '<p>For more info, visit: <a target="_blank" href="'+data[i].Link+'">'+data[i].Name+'</a> </p>'+
				      '</div>'+
				      '</div><h6>Category: '+data[i].Category+'</h6>');
			      }else{
			      	infowindow.setContent('<div id="content">'+
				      '<div id="siteNotice">'+
				      '</div>'+
				      '<h1 id="firstHeading" class="firstHeading">'+data[i].Name+'</h1>'+
				      '<div id="bodyContent">'+
				      '<p><b>'+data[i].Name+': '+data[i].Location+'</p>'+'<p>For more info, visit: <a target="_blank" href="'+data[i].Link+'">'+data[i].Name+'</a> </p>'+
				      '</div>'+
				      '</div><h6>Category: '+data[i].Category+'</h6>');
			      }
			          infowindow.open($scope.map, marker);
			        }
		        })(marker, i));

		        markers.push({type: data[i].type, category: data[i].Category, marker: marker});
    		 }
         }); 

         $('.filter').click(function () {
			var category = this.getAttribute('value');

			for (var i = 0; i < markers.length; i++)
			{
				console.log(markers[i].category);
				if (markers[i].category != category) {
					markers[i].marker.setMap(null);
				}
				else {
					markers[i].marker.setMap($scope.map);
				}
			}
		});

		$('.type').click(function (e) {
			e.preventDefault();
			var type = this.getAttribute('data-type');
			for (var i = 0; i < markers.length; i++)
			{
				//console.log(markers[i].type);
				if (markers[i].type != type) {
					markers[i].marker.setMap(null);
				}
				else {
					markers[i].marker.setMap($scope.map);
				}
			}

			if (type == 'gallery') {
				$('.left-side-menu').hide();
				$('.hider').hide(); 
			}
			else {
				$('.left-side-menu').show();
				$('.hider').show();  
				$('.category').hide();
				$('#' + this.getAttribute('data-cat')).show();
			}
			
		});      
});


mainApp.controller('TriviaController', function($scope, $http) {

	$scope.tagline = 'The square root of life is pi!';	
	$http.get('/api/trivias').success(function(data){
		console.log(data);
		$scope.trivias = data;
	});

	console.log($scope.tagline);

});

