(function() {
	angular.module('airQ')
	.controller('reportController', reportController);
	
	
	reportController.$inject = ['mapService' ];
	function reportController(mapService) {

		var vm = this;
		vm.stations = [];
		vm.stationNames = [];
		vm.selectedStationName = 'STATION A';
		vm.station = {};
		vm.co2ChartData = {};
		vm.vocChartData = {}; 
		vm.co2vocChartData = {};
		
		// api
		vm.getStationByName = getStationByName;
		// internal

		function getStationByName(selectedStationName) {

			vm.station = {};
			vm.stations = mapService.convertSpreadsheetToStationData();
			vm.stations.then(function(stations) {
				vm.station = mapService.getStationByName(stations,
						selectedStationName);
				vm.stationNames = mapService.getAllStationNames(stations);
				
				// configure chart data structure
				vm.co2ChartData = mapService.configureCo2ChartData(vm.station);
				vm.vocChartData = mapService.configureVocChartData(vm.station);
				vm.co2vocChartData = mapService.configureCo2VocChartData(vm.station);
				
				console.log(vm.co2ChartData);
			});
		}

		getStationByName(vm.selectedStationName);
	}
})();
