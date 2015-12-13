(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogDetailController', blogDetailController);
	
	blogDetailController.$inject = ['$routeParams', 'blogFactory'];
 
	function blogDetailController($routeParams, blogFactory) {
		var vm = this;
		vm.isEditable = false;
		
		vm.loadBlog = function() {
			blogFactory.oneById.get({id:$routeParams.blogId}, function success(data) {
				vm.blog = data;
			});
		}
		
		vm.enableEditBlog = function() {
			vm.isEditable = true;
		}
		
		vm.editBlog = function () {
			console.log(vm.blog);
			vm.blog.customer = {};
//			vm.blog.customer.id = $routeParams.
			blogFactory.one.update({}, function success(data) {
				console.log("Blog successful updated !!!");
			});
		}

	vm.loadBlog();
	};
})();
