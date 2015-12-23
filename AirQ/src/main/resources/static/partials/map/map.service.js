(function() {
	'use strict'
	
	angular.module('airQ')
	.service('mapService', ['$http', function() {
		
		this.initializeMap = function (stations) {
			var mapCanvas = document.getElementById('map');
			var mapOptions = {
				center : new google.maps.LatLng(45.746515, 21.227546),
				zoom : 12,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(mapCanvas, mapOptions);
			this.drawStationsOnMap(map, stations);
			return map;
		}
		
		this.drawStationsOnMap = function(map, stations) {
			for(var i=0; i<stations.length; i++) {
				
				this.drawMarkerOnMap(map, stations[i]);
			}
		}
		
		this.drawMarkerOnMap = function(map, station) {
			var markerCoordinates = {lat: angular.fromJson(station.coordinates.latitude), lng: angular.fromJson(station.coordinates.longitude)};
			var marker = new google.maps.Marker(
					{
						position: new google.maps.LatLng(markerCoordinates),
						map: map,
						title: station.stationName
					});
			
			google.maps.event.addListener(marker, 'click', function () {
				  window.location.href = '/#/report';
			});
		}
		
		this.addStation = function (feed, stations) {
			var station = {};
			
			// create new station entry
			station.stationName = feed.gsx$stationname.$t;
			
			// coordinates
			station.coordinates = {};
			station.coordinates.latitude = feed.gsx$longitude.$t; 
			station.coordinates.longitude = feed.gsx$latitude.$t;
			
			// values of stations
			station.values = [];
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
			
			// push station to array
			stations.push(station);
		}
		
		this.appendValuesToStation = function (station, feed) {
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
		}
	}]);
})();