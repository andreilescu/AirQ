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
			project.duration = 'Ian 2016 - Feb 2016';
			
			var project1 = {};
			project1.name = 'Project Skills';
			project1.client = 'DIALOG DATA';
			project1.description = 'Web application for employee management. This application bring you a possibility to select employee for a particular project. This possibility of filtering is implementing by matching between skills required in project and particular employee skill. At the end best matched employees are selected. Another cool thing is that using that program, management team can easily compute and print a CV of particular employee. ';
			project1.duration = 'Nov 2015 - Ian 2015';
			
			var project2 = {};
			project2.name = 'Project ItOmodular';
			project2.client = 'BMW'; 
			project2.description = 'Web application for managing car production projects. This application will improve development cycle of bmw auto production cycle. ';
			project2.duration = 'Sep 2014 - May 2015';
			
			vm.projects.push(project);
			vm.projects.push(project1);
			vm.projects.push(project2);
		}

		initializeExperience();
		initializeEducation();
	}
	;
})();