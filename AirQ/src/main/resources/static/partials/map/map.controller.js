(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http', 'mapService'];

	function mapController($scope, $http, mapService) {
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
				convertDataToStationData(data);
			}, function(data) {
				console.log("Spreadsheet: " + spreadsheet + " not found");
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
								if (vm.stations.length === 0) {
									mapService.addStation(feed, vm.stations);
								} else {
									var index = getIndexOfStation(vm.stations, feed.gsx$stationname.$t);
									if(index === -1) {
										mapService.addStation(feed, vm.stations);
									} else {
										var station = vm.stations[index];
										mapService.appendValuesToStation(station, feed);
									}	
								}
							});
			console.log(vm.stations);
		}
		
		function getIndexOfStation (stations, stationName) {
			return stations.map(function(x) {return x.stationName}).indexOf(stationName);
		}
		
		initialize();
		google.maps.event.addDomListener(window, 'load', initialize);
		getAllDataFromSpreadSheet(vm.spreadsheet);
	}
	;

})();