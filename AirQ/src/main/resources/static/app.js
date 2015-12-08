'use strict';
angular.module('airQ', ['ngRoute','ngMdIcons', 'ngResource'])
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
					templateUrl: 'partials/blog/blog.html',
					controller : 'blogController',
					controllerAs : 'vm'
				}).when('/blog/:blogId', {
					templateUrl: 'partials/blog/detail.blog.html',
					controller : 'blogController',
					controllerAs : 'vm'
				}).when('/aboutMe', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/aboutMe.html'
				}).otherwise({
					redirectTo : '/mapIndex'
				});
});

