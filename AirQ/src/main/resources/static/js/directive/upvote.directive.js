'use strict'

angular.module('airQ')
.directive('upvote', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directive/upvote.html',
		scope: {
			upvote: "&",
			downvote: "&",
			count: "="
		}
	}
});