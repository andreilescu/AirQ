(function() {
	angular.module('airQ')
	.controller('reportController', reportController);
	reportController.$inject = ['mapService']
	
	function reportController(mapService) {
		
		var vm = this;
		vm.stations = [];
		vm.stationName = 'STATION A';
		vm.station = {};
		
//		api
		vm.getStationByName = getStationByName;
//		internal

		function getStationByName(stationName) {

			vm.stations = mapService.convertSpreadsheetToStationData();
			
			vm.stations.then( function(stations) {
				vm.station = mapService.getStationByName(stations, stationName);
			});
		}
		
		getStationByName(vm.stationName);
	}
})();
