(function() {
	'use strict'
	
	angular.module('airQ')
	.service('mapService', ['$http', function() {
		
		this.initializeMap = function () {
			var mapCanvas = document.getElementById('map');
			var mapOptions = {
				center : new google.maps.LatLng(44.5403, -78.5463),
				zoom : 8,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(mapCanvas, mapOptions);
			return map;
		}
		
		this.addStation = function (feed, stations) {
			var station = {};
			// create new station entry
			station.stationName = feed.gsx$stationname.$t;
			// coordinates
			station.coordinates = {};
			station.coordinates.latitude = feed.gsx$latitude.$t;
			station.coordinates.longitude = feed.gsx$longitude.$t;
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