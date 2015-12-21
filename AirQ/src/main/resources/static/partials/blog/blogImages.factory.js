'use strict';

angular.module('airQ')
    .factory('blogImagesFactory', ['$resource',
                                 
        function($resource){
	        return {
	
	            oneById:    $resource('blogImages/:id', {id: '@id'},
	                {
	                    'delete':  {method: 'DELETE'}
	                }
	            ),
	            
	            one:    $resource('blogImages/', {},
	                {
	                	'save':    {method: 'POST'}
	                }
	            ),
	            
	            picture: $resource('blogImages/picture/:id', {id: '@id'},
	                    {
	                		'get':  {method: 'GET'}
	                    }
	            ),
	            
	            thumbnail: $resource('blogImages/thumbnail/:id', {id: '@id'},
	                    {
	                		'get':  {method: 'GET'}
	                    }
	            )
	        }
    }]);