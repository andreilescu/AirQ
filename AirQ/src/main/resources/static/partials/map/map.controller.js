(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http' ];

	function mapController($scope, $http) {
		var vm = this;
		vm.spreadsheet = "10Fcmr95zIjtgaxpOQO2VMA97OV-q6YSzLq0JeN_se18";
		vm.stations = [];

		function initialize() {
			var mapCanvas = document.getElementById('map');
			var mapOptions = {
				center : new google.maps.LatLng(44.5403, -78.5463),
				zoom : 8,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(mapCanvas, mapOptions)
		}

		function getAllDataFromSpreadSheet(spreadsheet) {
			$http(
					{
						url : 'https://spreadsheets.google.com/feeds/list/'
								+ spreadsheet + '/od6/public/values?alt=json',
						method : "GET"
					}).then(function(data) {
				// console.log(data);
				convertDataToStationData(data);
			}, function(data) {
				console.log("spreadsheet not found");
			});
		}

		function convertDataToStationData(data) {
			var feeds = data.data.feed.entry;
			// console.log(feeds);
			// iterate for all data and make some operations

			angular
					.forEach(
							feeds,
							function(feed) {
								console.log(feed.gsx$stationname.$t);

								if (vm.stations.length === 0) {
									addStation(feed);
								} else {
									var index = vm.stations.map(function(x) {return x.stationName}).indexOf(feed.gsx$stationname.$t);
									console.log("Station: " + feed.gsx$stationname.$t + "has: "+ index + "index");
									if(index === -1) {
										console.log("ADD");
										addStation(feed);
									} else {
										console.log("APPEND VALUES TO STATIONS");
										var station = vm.stations[index];
										appendValuesToStation(station, feed);
									}	
								}
							});
			
			console.log(vm.stations);
		}

		function addStation(feed) {
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
			console.log(station);
			// push station to array
			vm.stations.push(station);
		}
		
		function appendValuesToStation(station, feed) {
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
		}

		initialize();
		google.maps.event.addDomListener(window, 'load', initialize);
		getAllDataFromSpreadSheet(vm.spreadsheet);
	}
	;

})();