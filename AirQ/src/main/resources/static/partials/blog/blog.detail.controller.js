(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogDetailController', blogDetailController);
	
	blogDetailController.$inject = ['$routeParams', 'blogFactory'];
 
	function blogDetailController($routeParams, blogFactory) {
		var vm = this;
		
		vm.loadBlog = function() {
			console.log($routeParams);
			blogFactory.oneById.get({id:$routeParams.blogId}, function success(data) {
				vm.blog = data;
			});
		}

	vm.loadBlog();
	};
})();
