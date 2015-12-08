(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogDetailController', blogDetailController);
	
	blogDetailController.$inject = ['blogFactory'];
 
	function blogDetailController(blogFactory) {
		var vm = this;
		
		vm.loadBlog = function() {
			blogFactory.all.get({}, function success(data) {
				vm.blogs = data;
			})
		}

	vm.loadBlog();
	};
})();
