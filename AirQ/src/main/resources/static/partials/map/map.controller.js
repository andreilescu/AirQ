(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http', 'mapService'];

	function mapController($scope, $http, mapService) {
		var vm = this;
		vm.spreadsheet = "10Fcmr95zIjtgaxpOQO2VMA97OV-q6YSzLq0JeN_se18";
		vm.url = 'https://spreadsheets.google.com/feeds/list/' + vm.spreadsheet + '/od6/public/values?alt=json';
		vm.stations = [];
		vm.map = {};
		
		function initializeMap(stations) {
			mapService.initializeMap(stations);
		}

		function getDataFromSpreadSheet(url) {
			$http({
						url : url,
						method : "GET"
				  }).then(
						  	function(data) {
						  		convertDataToStationData(data);
				  		  	}, 
				  		  	function(data) {
				  		  		console.log("Spreadsheet: " + spreadsheet + " not found");
				  		  	}
				  	);
		}

		function convertDataToStationData(data) {
			var feeds = data.data.feed.entry;
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
			vm.map = initializeMap(vm.stations);
		}
		
		function getIndexOfStation (stations, stationName) {
			return stations.map(function(x) {return x.stationName}).indexOf(stationName);
		}
		
		
		google.maps.event.addDomListener(window, 'load', vm.map);
		getDataFromSpreadSheet(vm.url);
	};

})();