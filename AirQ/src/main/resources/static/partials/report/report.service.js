(function() {
	'use strict'
	
	angular.module('airQ')
	.service('reportService', reportService);
	
	function reportService() {
	
		// api
		// configure function that set all fields that are needed for drawing a chart
		this.configureCo2ChartData = configureCo2ChartData;
		this.configureVocChartData = configureVocChartData;
		this.configureCo2VocChartData = configureCo2VocChartData;
		
		// functions for additional statistic
		// average interval between records
//		this.getAverageInterval = getAverageInterval;
		
		// future functionality
		// get all records by selected month, week, day		
		// get all records between selected days
		
		
//		 configure function that set all fields that are needed for drawing a chart
		function configureCo2ChartData(station) {
			if(station != null && station.values != null) {
				
				// configure CO2 char data structure
				var chartData = {};
				var data = [];
				var maxCo2Value = {};
				var minCo2Value = {};
				var size = station.values.length;
				
				chartData.labels = [];
				chartData.data = []; 
				chartData.series = ['CO2'];
				chartData.maxCo2Value = {};
				chartData.minCo2Value = {};
				chartData.recordsNumber = {};
				chartData.averageInterval = {};
				
				
				
				for(var i=0; i<size; i++) {
					chartData.labels[i] = station.values[i].date;
					data[i] = angular.fromJson(station.values[i].co2);
					maxCo2Value = getMaxValue(maxCo2Value, data[i]);
					minCo2Value = getMinValue(minCo2Value, data[i]);
				}
				
				// populate with dates
				chartData.averageInterval = getAverageRecordInterval(chartData.labels[0], chartData.labels[size-1], size);
				chartData.recordsNumber = size;
				chartData.maxCo2Value = maxCo2Value;
				chartData.minCo2Value = minCo2Value;
				chartData.data.push(data);
				return chartData;
			}
		}
		
		
		function configureVocChartData(station) {
			if(station != null && station.values != null) {
				
				
				// configure VOC char data structure
				var chartData = {};
				var data = [];
				var maxVocValue = {};
				var minVocValue = {};
				var size = station.values.length;
				
				// configure VOC char data structure
				chartData.labels = [];
				chartData.data = []; 
				chartData.series = ['VOC'];
				
				
				for(var i=0; i<station.values.length; i++) {
					chartData.labels[i] = station.values[i].date;
					data[i] = angular.fromJson(station.values[i].voc);
					maxVocValue = getMaxValue(maxVocValue, data[i]);
					minVocValue = getMinValue(minVocValue, data[i]);
				}
				
				
				// populate with dates
				chartData.averageInterval = getAverageRecordInterval(chartData.labels[0], chartData.labels[size-1], size);
				chartData.recordsNumber = size;
				chartData.maxVocValue = maxVocValue;
				chartData.minVocValue = minVocValue;
				chartData.data.push(data);
				return chartData;
				
			}
		}
		
		function getAverageRecordInterval(firstRecordDate, lastRecordDate, size) {
			firstRecordDate = new Date(firstRecordDate);
			lastRecordDate = new Date(lastRecordDate);
			
			var averagePeriod = (lastRecordDate - firstRecordDate) / (size*60000);
			return averagePeriod;
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
		
		function getMaxValue(maxValue, comparableValue) {
			if(maxValue > comparableValue) {
				return maxValue;
			} else {
				return comparableValue;
			}
		}
		
		function getMinValue(minValue, comparableValue) {
			if(minValue < comparableValue) {
				return minValue;
			} else {
				return comparableValue;
			}
		}
	}
})();