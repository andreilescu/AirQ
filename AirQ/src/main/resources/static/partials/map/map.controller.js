(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http', 'mapService' ];

	function mapController($scope, $http, mapService) {
		var vm = this;
		vm.map = {};
		vm.stations = [];

		function convertSpreadsheetToStationData() {
			vm.stations = mapService.convertSpreadsheetToStationData();
		}

		// initialize the map
		function initializeMap() {
			vm.map = mapService.initializeMap();
		}

		// draw stations on map
		function drawStationsOnMap() {
			vm.map = mapService.drawStationsOnMap(vm.map, vm.stations);
		}

		function initializeAll() {
			convertSpreadsheetToStationData();
			initializeMap();	
		}

		initializeAll();
		google.maps.event.addDomListener(window, 'load', vm.map);
	}
	;

})();