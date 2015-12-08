(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogListController', blogListController);
	
	blogListController.$inject = ['blogFactory'];
 
	function blogListController(blogFactory) {
		var vm = this;
		
		vm.loadBlogs = function() {
			blogFactory.all.get({}, function success(data) {
				vm.blogs = data;
			})
		}

	vm.loadBlogs();
	};
})();