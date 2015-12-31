(function() {
	'use strict'
	
	angular.module('airQ')
	.service('reportService', reportService);
	
	function reportService() {
	
		// configure function that set all fields that are needed for drawing a chart
		this.configureCo2ChartData = configureCo2ChartData;
		this.configureVocChartData = configureVocChartData;
		this.configureCo2VocChartData = configureCo2VocChartData;
		
//		 configure function that set all fields that are needed for drawing a chart
		function configureCo2ChartData(station) {
			if(station != null && station.values != null) {
				
				// configure CO2 char data structure
				var chartData = {};
				chartData.labels = [];
				chartData.data = []; 
				chartData.series = ['CO2'];
				var data = [];
				
				for(var i=0; i<station.values.length; i++) {
					chartData.labels[i] = station.values[i].date;
					data[i] = angular.fromJson(station.values[i].co2);
				}
				chartData.data.push(data);
				return chartData;
				
			}
		}
		
		function configureVocChartData(station) {
			if(station != null && station.values != null) {
				
				// configure VOC char data structure
				var chartData = {};
				chartData.labels = [];
				chartData.data = []; 
				chartData.series = ['VOC'];
				var data = [];
				
				for(var i=0; i<station.values.length; i++) {
					chartData.labels[i] = station.values[i].date;
					data[i] = angular.fromJson(station.values[i].voc);
				}
				chartData.data.push(data);
				return chartData;
				
			}
		}
		
		function configureCo2VocChartData(station) {
			if(station != null && station.values != null) {
				
				// configure VOC char data structure
				var chartData = {};
				chartData.labels = [];
				chartData.data = []; 
				chartData.series = ['CO2', 'VOC'];
				var dataCo2 = [];
				var dataVoc = [];
				for(var i=0; i<station.values.length; i++) {
					chartData.labels[i] = station.values[i].date;
					dataCo2[i] = angular.fromJson(station.values[i].co2);
					dataVoc[i] = angular.fromJson(station.values[i].voc);
				}
				chartData.data.push(dataCo2);
				chartData.data.push(dataVoc);
				return chartData;
			
			}	
		}
	}
})();