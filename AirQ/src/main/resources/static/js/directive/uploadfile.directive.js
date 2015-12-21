'use strict';

angular.module('airQ')

.directive('uploadfile', function() {
	return {
		restrict : 'A',
		link : function(scope, element) {

			element.on('click', function(e) {
				angular.element(e.target).parent().siblings('#upload').click();
			});
		}
	};
});