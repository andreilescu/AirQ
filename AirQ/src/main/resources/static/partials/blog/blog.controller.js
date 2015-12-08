(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogController', blogController);
	
	blogController.$inject = ['blogFactory'];
 
	function blogController(blogFactory) {
		var vm = this;
		
		vm.loadBlogs = function() {
			blogFactory.all.get({}, function success(data) {
				vm.blogs = data;
			})
		}

	vm.loadBlogs();
	};
})();