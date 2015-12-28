(function() {
	'use strict'

	angular.module('airQ').controller('mapController', mapController);

	// for inject dependencies
	mapController.$inject = [ '$scope', '$http', 'mapService' ];

	function mapController($scope, $http, mapService) {
		var vm = this;
		vm.map = {};
		vm.stations = [];
		
	// draw stations on map
	function drawStationsOnMap() {
		vm.map = mapService.drawStationsOnMap(vm.map, vm.stations);
	}

	function initializeAll() {
		vm.map = mapService.initializeMap();
		vm.stations = mapService.convertSpreadsheetToStationData();
		
		vm.map.then( function (resolveMap) {
				vm.stations.then(function(resolveStations){
					mapService.drawStationsOnMap(vm.map.$$state.value, vm.stations.$$state.value);
				}, function(reject) {
					console.log("error");
				}
			);
		})
	}
		initializeAll();
	}
	;

})();