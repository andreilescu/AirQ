(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogDetailController', blogDetailController);
	
	blogDetailController.$inject = ['$routeParams', 'blogFactory', 'Upload'];
 
	function blogDetailController($routeParams, blogFactory, Upload) {
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
		
		vm.upload = function(files) {
			if (files && files.length) {
//				for (var i = 0; i < files.length; i++) {
//					var file = files[i];
//					Upload.upload({ url : 'employeeImages/'+ $stateParams.employeeId, method : 'POST', file : file }).progress(function(evt) {
//						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//						console.log('progress: '  + progressPercentage + '% ' + evt.config.file.name);
//					})
//					.success(function(data, status, headers, config) {
//						$scope.employee.photo = 'data:image/png;base64,' + data.picture;
//						$scope.employee.picture = data.picture;
//						toaster.success('The image was uploaded');
//					})
//					.error(function(data, status, headers, config) {
//						console.log('error status: ' + status);
//						toaster.error('Image format is not supported.');
//					})
//				}
			}
		}
		
		vm.loadBlog();
	};
})();
