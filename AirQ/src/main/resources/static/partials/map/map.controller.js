(function () {
	'use strict'
	
	angular.module('airQ')
	.controller('mapController', mapController);
		
	// for inject dependencies
	mapController.$inject = ['$scope', '$http'];
	
	function mapController($scope, $http) {
		var vm = this;
		vm.spreadsheet = "1zjeo-SN-WZoaeONPYR59hY1A3G5-Adx7JhufZLJQ65A"; 
		
	    function initialize() {
	      var mapCanvas = document.getElementById('map');
	      var mapOptions = {
	        center: new google.maps.LatLng(44.5403, -78.5463),
	        zoom: 8,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      }
	      var map = new google.maps.Map(mapCanvas, mapOptions)
	    }
	    
	    function getAllDataFromSpreadSheet(spreadsheet) {
	    	$http({
	    		url: 'https://spreadsheets.google.com/feeds/list/'+spreadsheet+'/od6/public/values?alt=json',
	    		method: "GET"
	    		}).then(function(data) {
			    			vm.data = data;
			    			console.log(data);
	    				},
	    				function(data) {
	    					console.log("spreadsheet not found");
	    				}
	    			);
	    }
	    
	    initialize();
	    google.maps.event.addDomListener(window, 'load', initialize);
	    getAllDataFromSpreadSheet(vm.spreadsheet);
};

})();