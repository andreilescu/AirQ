(function() {
	'use strict'
	
	angular.module('airQ')
	.controller('blogAddController', blogAddController);
	
	blogAddController.$inject = ['blogFactory'];
	
	function blogAddController(blogFactory) {
		var vm = this;
		
		vm.createBlog = function() {	
			
			vm.blog.customer = {};
			vm.blog.customer.id = 1;
			
			blogFactory.one.save(vm.blog, function(data) {
				console.log(data);
			});
		}
	}
	
})();