'use strict';
	
angular
	.module('airQ')
	.factory('voteBlogFactory', ['$resource',
	     function($resource) {
			return {
/*				oneById: 	$resource('voteBlog/:id', {id: '@id'}, 
								{
									'get':		{method: 'GET'}
								}
				),*/
				one:		$resource('/blog/voteBlog/', {}, 
								{
									'save': 	{method: 'POST'}
								}
				)
			}
		
		
		}                                                   
]);