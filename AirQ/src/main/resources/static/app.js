'use strict';
angular.module('airQ', ['ngRoute','ngMdIcons', 'ngResource', 'ngFileUpload', 'chart.js'])
	.config(function($routeProvider) {
				$routeProvider.when('/', {
					redirectTo : '/mapIndex'
				}).when('/mapIndex', {
					controller : 'mapController',
					templateUrl: 'partials/map/mapIndex.html',
					controllerAs: 'vm'
				}).when('/stations', {
					controller : 'stationsController',
					templateUrl: 'partials/stations/listStations.html'
				}).when('/report/:stationName', {
					controller : 'reportController',
					templateUrl: 'partials/report/report.html',
					controllerAs : 'vm'
				}).when('/report', {
					controller : 'reportController',
					templateUrl: 'partials/report/report.html',
					controllerAs : 'vm'
				}).when('/blog/add', {
					templateUrl: 'partials/blog/blog.add.html',
					controller : 'blogAddController',
					controllerAs : 'vm'
				}).when('/blog', {
					templateUrl: 'partials/blog/blog.list.html',
					controller : 'blogListController',
					controllerAs : 'vm'
				}).when('/customer/:customerId/blog/:blogId', {
					templateUrl: 'partials/blog/blog.detail.html',
					controller : 'blogDetailController',
					controllerAs : 'vm'
				}).when('/aboutMe', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/aboutMe.html'
				}).otherwise({
					redirectTo : '/mapIndex'
				});
});

