(function() {
	angular.module('airQ')
	.controller('reportController', reportController);
	reportController.$inject = ['mapService']
	
	function reportController(mapService) {
		
		var vm = this;
		vm.stations = [];
		vm.stationNames = [];
		vm.selectedStationName = 'STATION A'; 
		vm.station = {};
		
//		api
		vm.getStationByName = getStationByName;
//		internal

		function getStationByName(selectedStationName) {
			
			vm.station = {};
			vm.stations = mapService.convertSpreadsheetToStationData();
			vm.stations.then( function(stations) {
				vm.station = mapService.getStationByName(stations, selectedStationName);
				console.log(vm.station.values);
				vm.stationNames = mapService.getAllStationNames(stations);
			});
		}
		
		
		
		getStationByName(vm.selectedStationName);
	}
})();
