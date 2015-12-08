'use strict'

angular.module('airQ')
	.factory('blogFactory', ['$resource', 
	         function($resource) {
				return {
					all: 	$resource('blog', {}, 
								{
									'get':	{method: 'GET', isArray: true}  
								})
				}
			}                 
]);
