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
				}).when('/report', {
					controller : 'reportController',
					templateUrl: 'partials/report/report.html'
				}).when('/blog', {
					controller : 'blogController',
					templateUrl: 'partials/blog/blog.html'
				}).when('/aboutMe', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/aboutMe.html'
				}).otherwise({
					redirectTo : '/mapIndex'
				});
});

