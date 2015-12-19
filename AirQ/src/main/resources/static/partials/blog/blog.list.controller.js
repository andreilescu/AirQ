(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogListController', blogListController);
	
	blogListController.$inject = ['$scope', '$http', '$templateCache', 'blogFactory', 'voteBlogFactory'];
 
	function blogListController($scope, $http, $templateCache, blogFactory, voteBlogFactory) {
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
						
			var url = 'blog/voteBlog';
			
			$http.post(url, voteBlog)
            .success(function (voteBlog, status, headers, config) {
            	vm.count = voteBlog;
            })
            .error(function (data, status, header, config) {
            });
		}
		
		vm.getCounter = function(blog) {
			var url = '/blog/voteBlog/';
			var blogId = blog.id;
			
			$http.get(url + blogId
					 ) 
				         .success(function (data) {
				        	 console.log("succes in obtaining vote blog counter" + data);
				        	 vm.count = data;
                         })
                         .error(function (data) {
                        	 console.log("error in obtaining vote blog counter");
                         });
		}

	
	vm.loadBlogs();
	};
})();