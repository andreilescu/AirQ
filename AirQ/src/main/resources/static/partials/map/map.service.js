(function() {
	'use strict'
	
	angular.module('airQ')
	.service('mapService', function() {
		
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
	});
})();