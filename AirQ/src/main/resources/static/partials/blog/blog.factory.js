'use strict'

angular.module('airQ')
	.factory('blogFactory', ['$resource', 
	         function($resource) {
				return {
					all: 	$resource('blog', {}, 
								{
									'get':		{method: 'GET', isArray: true}  
								}
					),
					oneById: $resource('blog/:id', {id: '@id'}, 
								{
									'get': 		{method: 'GET'},
									'delete': 	{method: 'DELETE'}
								}
					),
					one:	$resource('blog/', {},
								{
									'save': 	{method: 'POST'},
									'update':	{method: 'PUT'}
								}
					)
				}
			}                 
]);
