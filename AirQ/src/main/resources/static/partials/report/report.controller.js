(function() {
	angular.module('airQ')
	.controller('reportController', reportController);
	
	
	reportController.$inject = ['$routeParams', 'mapService', 'reportService'];
	function reportController($routeParams, mapService, reportService) {

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
			
			if($routeParams.stationName != null) {
				vm.selectedStationName = $routeParams.stationName;
			}
			
			vm.station = {};
			vm.stations = mapService.convertSpreadsheetToStationData();
			vm.stations.then(function(stations) {
				vm.station = mapService.getStationByName(stations,
						selectedStationName);
				vm.stationNames = mapService.getAllStationNames(stations);
				
				// configure chart data structure
				vm.co2ChartData = reportService.configureCo2ChartData(vm.station);
				vm.vocChartData = reportService.configureVocChartData(vm.station);
				vm.co2vocChartData = reportService.configureCo2VocChartData(vm.station);
			});
			
		}

		getStationByName(vm.selectedStationName);
	}
})();
