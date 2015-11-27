angular.module('airQ')
.controller('menuController', function($scope, $location) {
	$scope.getClass = function(path) {
		if($location.path().substr(0, path.lenth) === path) {
			console.log("HELLO" + "RETURN ACTIVE" + path);
			return 'active';
		} else {
			return '';
		}
	}
});