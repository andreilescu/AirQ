(function() {
	'use strict'
	
		angular.module('airQ')
		.service('mapService', mapService);
		mapService.$inject = ['$http', '$q']; 
	                        
	function mapService($http, $q) {
		
	var spreadsheet = "10Fcmr95zIjtgaxpOQO2VMA97OV-q6YSzLq0JeN_se18";
	var url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheet + '/od6/public/values?alt=json';
		
	var stations = [];
	var map = {};
		
	
		this.convertSpreadsheetToStationData = function() {
		 
			var deferred = $q.defer();
			var dataRetrieved = getDataFromSpreadSheet();
			
			setTimeout(function() {
				deferred.notify('About to map ');
			// retrieve data from Spreadsheet
//			$http({
//				url : url,
//				method : "GET"
//		  })
				
				dataRetrieved.then(
			  	function(data) {
			  	// retrieve feeds from data
					var feeds = data.data.feed.entry;
					angular
							.forEach(
									feeds,
									function(feed) {
										if (stations.length === 0) {
											addStation(feed, stations);
										} else {
											var index = getIndexOfStation(stations, feed.gsx$stationname.$t);
											if(index === -1) {
												addStation(feed, stations);
											} else {
												var station = stations[index];
												appendValuesToStation(station, feed);
											}	
										}
									});
					console.log(stations);
//					return stations;
	  		  	}, 
	  		  	function(data) {
	  		  		console.log("Spreadsheet: " + spreadsheet + " not found");
	  		  	}
		  );
			
				if(stations) {
					deferred.resolve(stations);
				} else {
					 deferred.reject(stations);
				}
			}, 10000); 
			 return deferred.promise;
		}
	
	
		function getDataFromSpreadSheet () {
			var deferred = $q.defer();
				$http({
							url : url,
							method : "GET"
					  }).then(
							  	function(data) {
							  		deferred.resolve(data);
					  		  	}, 
					  		  	function(data) {
					  		  	deferred.reject("Spreadsheet: " + spreadsheet + " not found");
					  		  	}
				);
			return deferred.promise;
		}
	
		
		
		function getIndexOfStation(stations, stationName) {
			return stations.map(function(x) {return x.stationName}).indexOf(stationName);
		}
		
		this.initializeMap = function () {
			var deferred = $q.defer();
			
			setTimeout(function() {
				deferred.notify('About to map ');
				var mapCanvas = document.getElementById('map');
				var mapOptions = {
					center : new google.maps.LatLng(45.746515, 21.227546),
					zoom : 12,
					mapTypeId : google.maps.MapTypeId.ROADMAP
				}
				var map = new google.maps.Map(mapCanvas, mapOptions);
		
				if(map) {
					deferred.resolve(map);
				} else {
					 deferred.reject(map);
				}
				
			}, 1000);
		
			
			 return deferred.promise;
		}
			
		this.drawStationsOnMap = function (map, stations) { 
			for(var i=0; i<stations.length; i++) {
				drawMarkerOnMap(map, stations[i]);
			}
			
			google.maps.event.addDomListener(window, 'load', map);
		}
		
		function drawMarkerOnMap(map, station) {
			var markerCoordinates = {lat: angular.fromJson(station.coordinates.latitude), lng: angular.fromJson(station.coordinates.longitude)};
			var marker = new google.maps.Marker(
					{
						position: new google.maps.LatLng(markerCoordinates),
						map: map,
						title: station.stationName
					});
			
			google.maps.event.addListener(marker, 'click', function () {
				  window.location.href = '/#/report';
			});
		}
		
		function addStation(feed, stations) {
			var station = {};
			
			// create new station entry
			station.stationName = feed.gsx$stationname.$t;
			
			// coordinates
			station.coordinates = {};
			station.coordinates.latitude = feed.gsx$longitude.$t; 
			station.coordinates.longitude = feed.gsx$latitude.$t;
			
			// values of stations
			station.values = [];
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
			
			// push station to array
			stations.push(station);
		}
		
		function appendValuesToStation(station, feed) {
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
		}
	};
})();