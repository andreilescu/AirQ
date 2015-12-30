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
		
		
		vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
		vm.series = ['Series A', 'Series B'];
		vm.data = [
		    [65, 59, 80, 81, 56, 55, 40],
		    [28, 48, 40, 19, 86, 27, 90]
		];
		vm.onClick = function (points, evt) {
		    console.log(points, evt);
		};
		
		// api
		vm.getStationByName = getStationByName;
		// internal

		function getStationByName(selectedStationName) {

			vm.station = {};
			vm.stations = mapService.convertSpreadsheetToStationData();
			vm.stations.then(function(stations) {
				vm.station = mapService.getStationByName(stations,
						selectedStationName);
				console.log(vm.station.values);
				vm.stationNames = mapService.getAllStationNames(stations);
			});
		}

		getStationByName(vm.selectedStationName);
	}
})();
