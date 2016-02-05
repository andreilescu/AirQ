(function() {
	'use strict';

	angular.module('airQ').controller('aboutMeController', aboutMeController);

	// for inject dependencies
	aboutMeController.$inject = [ '$scope' ];

	function aboutMeController($scope) {
		var vm = this;

		function initializeEducation() {
			vm.educations = [];
			var education = {};
			education.period = '1998/2010';
			education.type = 'High School';
			education.title = 'Nicolae Iorga';
			education.description = 'High School Nicolae Iorga. This lyceum was the first place where are discover a lot of interesting and very useful things. Not all lectures were loved by me. My best lecture for me in that period was Physical Education.';

			var education2 = {};
			education2.period = '2010/2014';
			education2.type = 'University';
			education2.title = 'University Politehnica of Timisoara';
			education2.description = 'University Politehnica of Timisoara was instution that gave me a lot of knowledge';

			var education3 = {};
			education3.period = '2010/2014';
			education3.type = 'University';
			education3.title = 'University Politehnica of Timisoara';
			education3.description = 'University Politehnica of Timisoara was instution that gave me a lot of knowledge';

			vm.educations.push(education);
			vm.educations.push(education2);
			vm.educations.push(education3);
		}

		function initializeExperience() {
			vm.projects = [];

			var project = {};
			project.name = 'Project Delticom';
			project.client = 'NETEX';
			project.description = 'Web shop generator for dynamically building shops. It is very flexible and powerful tool for generating the shops in different languages. ';
			project.duration = 'Ian 2015 - Till Now 2015';
			
			var project1 = {};
			project1.name = '';
			project1.client = '';
			project1.description = '';
			project1.duration = '';
			
			vm.projects.push(project);
			vm.projects.push(project1);
		}

		initializeExperience();
		initializeEducation();
	}
	;
})();