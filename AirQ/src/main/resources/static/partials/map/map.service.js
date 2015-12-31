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
	
		// api 
		this.convertSpreadsheetToStationData = convertSpreadsheetToStationData;
		this.initializeMap = initializeMap;
		this.drawStationsOnMap = drawStationsOnMap;
		this.getStationByName = getStationByName;
		this.getAllStationNames = getAllStationNames;
		
		// intern
		var getDataFromSpreadSheet = getDataFromSpreadSheet;
		var getIndexOfStation = getIndexOfStation;
		var drawMarkerOnMap = drawMarkerOnMap;
		var addStation = addStation;
		var appendValuesToStation = appendValuesToStation;
	
	
		function convertSpreadsheetToStationData() {
			var deferred = $q.defer();
			var dataRetrieved = getDataFromSpreadSheet();
			
			setTimeout(function() {
				deferred.notify('About to map ');		
				dataRetrieved.then(
			  	
						function(data) {
//								 retrieve feeds from data
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
			}, 500); 
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
		
		function getStationByName(stations, stationName) {
			var station = {};
			stations.map(
						function(x) {
							if(x.stationName === stationName) {
								station = x;
							}	
						});
			
			return station;
		};
		
		function getAllStationNames(stations) {
			var stationNames = [];
			stations.map(
						function(x) {
							stationNames.push(x.stationName);
						}
			)
			return stationNames;
		}
		
		function initializeMap() {
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
			
		function drawStationsOnMap(map, stations) { 
			// draw markers
			for(var i=0; i<stations.length; i++) {
				drawMarkerOnMap(map, stations[i]);
			}
			
			google.maps.event.addDomListener(window, 'load', map);
		}
		
		function drawMarkerOnMap(map, station) {
			var markerCoordinates = {lat: angular.fromJson(station.coordinates.latitude), lng: angular.fromJson(station.coordinates.longitude)};
			var stationName = station.stationName;
			var marker = new google.maps.Marker(
					{
						position: new google.maps.LatLng(markerCoordinates),
						map: map,
						title: stationName
					});
			
			var infoWindow = new google.maps.InfoWindow();
			
			google.maps.event.addListener(marker, 'click', function () {
				window.location.href = '/#/report/' + stationName;
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
			var containsValue = false;
			
			if(station.values.length > 0) {
				
				station.values.map(function(x) {
					// test if station contains feed with the same date
					if(x.date === feed.gsx$datetime.$t) {
						// set flat to true
						containsValue = true;
					}
				});
				if(containsValue === false) {
					createStationValue(station, feed);
				}
			} else {
				createStationValue(station, feed);
			}
		}
		
		function createStationValue(station, feed) {
			var value = {};
			value.date = feed.gsx$datetime.$t;
			value.co2 = feed.gsx$co2.$t;
			value.voc = feed.gsx$voc.$t;
			station.values.push(value);
		}
	};
})();