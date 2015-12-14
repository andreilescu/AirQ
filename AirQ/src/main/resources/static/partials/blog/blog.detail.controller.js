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
			blogFactory.one.update({}, vm.blog, function success(data) {
				console.log("Blog successful updated !!!");
			});
		}
		
		vm.deleteBlog = function () {
			console.log("remove blog");
			blogFactory.oneById.delete({id:vm.blog.id}, function success(data) {
				console.log("blog successeful removed");
			});
		}
		
		vm.loadBlog();
	};
})();
