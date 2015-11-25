'use strict';
angular.module('airQ', ['ngRoute','ngMdIcons'])
	.config(function($routeProvider) {
				$routeProvider.when('/', {
					redirectTo : '/mapIndex'
				}).when('/mapIndex', {
					controller : 'mapController',
					templateUrl: 'partials/map/mapIndex.html'
				}).when('/stations', {
					controller : 'stationsController',
					templateUrl: 'partials/stations/listStations.html'
				}).otherwise({
					redirectTo : '/mapIndex'
				});
});

