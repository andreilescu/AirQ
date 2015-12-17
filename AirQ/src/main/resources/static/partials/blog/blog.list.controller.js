(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogListController', blogListController);
	
	blogListController.$inject = ['blogFactory', 'voteBlogFactory'];
 
	function blogListController(blogFactory, voteBlogFactory) {
		var vm = this;
		vm.count = 0;
		
		vm.loadBlogs = function() {
			blogFactory.all.get({}, function success(data) {
				vm.blogs = data;
			})
		}
		
		vm.voteOnBlog = function(blog, vote) {
			
			var voteBlog = {};
			voteBlog.like = vote;
			voteBlog.blog = blog;
			voteBlog.customerId = 1;
			
			// call controller method
			voteBlogFactory.one.save({}, voteBlog, function success(data) {
				console.log("Succesefuly saved");
				vm.count = data;
			})
			
		}

	vm.loadBlogs() 
	};
})();