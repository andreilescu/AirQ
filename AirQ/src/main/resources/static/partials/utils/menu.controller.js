angular.module('airQ')
.controller('menuController', function($scope, $location) {
	$scope.showMobileIcon = true;
	$scope.showMobileMenuDiv = false;
	
	$scope.getClass = function(path) {
		var basePath = $location.path().substr(0, path.lenth);
		var active = (basePath === path);	
		if(active) {
			return active;
		} else {
			return '';
		}
	};
	
	$scope.isActive = function (viewLocation) {
	     var active = (viewLocation === $location.path());
	     return active;
	};
	
	$scope.showMobileMenu = function() {
		$scope.showMobileIcon = !$scope.showMobileIcon;
		$scope.showMobileMenuDiv = !$scope.showMobileMenuDiv;
	}
});