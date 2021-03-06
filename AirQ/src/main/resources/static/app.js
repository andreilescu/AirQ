'use strict';
angular.module('airQ', ['ngRoute','ngMdIcons', 'ngResource', 'ngFileUpload', 'chart.js', 'rzModule'])
	.config(function($routeProvider) {
				$routeProvider.when('/', {
					redirectTo : '/map'
				}).when('/map', {
					controller : 'mapController',
					templateUrl: 'partials/map/map.html',
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
					templateUrl: 'partials/about/aboutMe.html',
					controllerAs : 'vm'
				}).when('/skills', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/components/skills/skills.html',
					controllerAs : 'vm'
				}).when('/experiences', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/components/experience/experiences.html',
					controllerAs : 'vm'
				}).when('/educations', {
					controller : 'aboutMeController',
					templateUrl: 'partials/about/components/education/educations.html',
					controllerAs : 'vm'
				})
				
				.otherwise({
					redirectTo : '/map'
				});
});

