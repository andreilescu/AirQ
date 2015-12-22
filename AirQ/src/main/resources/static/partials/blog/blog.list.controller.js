(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogListController', blogListController);
	
	blogListController.$inject = ['$scope', '$http', '$templateCache', 'blogFactory', 'voteBlogFactory', 'blogImagesFactory'];
 
	function blogListController($scope, $http, $templateCache, blogFactory, voteBlogFactory, blogImagesFactory) {
		var vm = this;
		vm.count = 0;
		
		vm.loadBlogs = function() {
			blogFactory.all.get({}, function success(data) {
				vm.blogs = data;
				
				// Set thumbnail
				angular.forEach(vm.blogs, function(blog) {
					blogImagesFactory.thumbnail.get({id:blog.id}, function succes(data) {
						if(data.thumbnail == null){
							blog.photo = 'img/blog-default-thumb.png';
						}
						else{
							blog.photo = 'data:image/png;base64,' + data.thumbnail;
						}
					});	
				});
			});
		}
		
		vm.voteOnBlog = function(blog, vote) {
			
			var voteBlog = {};
			voteBlog.like = vote;
			voteBlog.blog = blog;
			voteBlog.customerId = 1;
						
			var url = 'blog/voteBlog';
			
			$http.post(url, voteBlog)
            .success(function (voteBlog, status, headers, config) {
            	vm.loadBlogs();
            })
            .error(function (data, status, header, config) {
            });
		}
	
	vm.loadBlogs();
	};
})();