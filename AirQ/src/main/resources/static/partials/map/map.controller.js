(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http', 'mapService' ];

	function mapController($scope, $http, mapService) {
		var vm = this;
		vm.map = {};
		vm.stations = [];

//		function convertSpreadsheetToStationData() {
//			vm.stations = mapService.convertSpreadsheetToStationData();
//		}
//
//		// initialize the map
//		function initializeMap() {
//			vm.map = mapService.initializeMap();
//		}

		// draw stations on map
		function drawStationsOnMap() {
			vm.map = mapService.drawStationsOnMap(vm.map, vm.stations);
		}

		function initializeAll() {
			
			vm.map = mapService.initializeMap();
			vm.stations = mapService.convertSpreadsheetToStationData();
			
			vm.stations.then( 
								function(resolve){
									vm.map.then( function (resolve) {
										mapService.drawStationsOnMap(vm.map, vm.stations);
									})
								}, function(reject) {
									console.log("error");
								}
			);
		}

		initializeAll();
	}
	;

})();