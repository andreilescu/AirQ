(function() {
	'use strict';
	
	angular
		.module('airQ')
		.controller('blogDetailController', blogDetailController);
	
	blogDetailController.$inject = ['$routeParams', 'blogFactory', 'Upload', 'blogImagesFactory'];
 
	function blogDetailController($routeParams, blogFactory, Upload, blogImagesFactory) {
		var vm = this;
		vm.isEditable = false;
		vm.blog = {};
		
		vm.loadBlog = function() {
			blogFactory.oneById.get({id:$routeParams.blogId}, function success(data) {
				vm.blog = data;
				
				blogImagesFactory.thumbnail.get({id:vm.blog.id}, function succes(data) {
					if(data.thumbnail == null){
						vm.blog.photo = 'img/blog-default-thumb.png';
					}
					else{
						vm.blog.photo = 'data:image/png;base64,' + data.thumbnail;
					}
				});	
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
			console.log(files);
			if (files && files.length) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					console.log("Upload file: " + i);
					
					Upload.upload({ url : 'blogImages/'+ vm.blog.id, method : 'POST', file : file }).progress(function(evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						console.log('progress: '  + progressPercentage + '% ' + evt.config.file.name);
					})
					.success(function(data, status, headers, config) {
						vm.blog.photo = 'data:image/png;base64,' + data.blogPicture;
						vm.blog.photo.picture = data.blogPicture;
						toaster.success('The image was uploaded');
					})
					.error(function(data, status, headers, config) {
						console.log('error status: ' + status);
						toaster.error('Image format is not supported.');
					})
				}
			}
		}
		
		vm.loadBlog();
	};
})();
