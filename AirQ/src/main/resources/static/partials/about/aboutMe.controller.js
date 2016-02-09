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
		
		function initializeSkills() {
			vm.skills = [];
			
			var skillGroup1 = {};
			skillGroup1.name = 'Java Basics';
			
			var skillGroup2 = {};
			skillGroup2.name = 'Java Advanced';
			
			var skillGroup3 = {};
			skillGroup3.name = 'Web frontend';
			
			var skillGroup4 = {};
			skillGroup4.name = 'Hybris';
			
			var skillGroup5 = {};
			skillGroup5.name = 'DB';
			
			var skillsVector1 = [];
			var skillsVector2 = [];
			var skillsVector3 = [];
			var skillsVector4 = [];
			var skillsVector5 = [];
			
			var skill = {};
			skill.name = 'E/Java';
			skill.value = 70;
			
			
			var skill2 = {};
			skill2.name = 'JDBC';
			skill2.value = 50;
			
			var skill3 = {};
			skill3.name = 'Generics';
			skill3.value = 60;
			
			
			var skill4 = {};
			skill4.name = 'Debugging';
			skill4.value = 100;
			
			
			// Skill Group 2
			var skill5 = {};
			skill5.name = 'E/REST';
			skill5.value = 70;
			
			
			var skill6 = {};
			skill6.name = 'E/Apache POI';
			skill6.value = 60;
			
			
			var skill7 = {};
			skill7.name = 'Log4J/Commons';
			skill7.value = 50;
			
			
			var skill8 = {};
			skill8.name = 'E/JMS';
			skill8.value = 100;
			
			var skill9 = {};
			skill9.name = 'Reflection';
			skill9.value = 40;
			
			// Skill Group 3
			var skill10 = {};
			skill10.name = 'HTML';
			skill10.value = 40;
			
			var skill11 = {};
			skill11.name = 'CSS';
			skill11.value = 40;
			
			// Skill Group 4
			var skill12 = {};
			skill12.name = 'Commerce Trail';
			skill12.value = 70;
		
			var skill13 = {};
			skill13.name = 'Core Trail';
			skill13.value = 70;
		
			// Skill Group 5
			var skill14 = {};
			skill14.name = 'MySQL';
			skill14.value = 80;
		
			var skill15 = {};
			skill15.name = 'Oracle';
			skill15.value = 80;
			
			var skill16 = {};
			skill16.name = 'IBM/DB2';
			skill16.value = 70;
			
			var skill17 = {};
			skill17.name = 'H2';
			skill17.value = 80;
			
			// added to array
			skillsVector1.push(skill);
			skillsVector1.push(skill2);
			skillsVector1.push(skill3);
			skillsVector1.push(skill4);
			
			skillsVector2.push(skill5);
			skillsVector2.push(skill6);
			skillsVector2.push(skill7);
			skillsVector2.push(skill8);
			skillsVector2.push(skill9);
			
			skillsVector3.push(skill10);
			skillsVector3.push(skill11);
			
			skillsVector4.push(skill12);
			skillsVector4.push(skill13);
			
			skillsVector5.push(skill14);
			skillsVector5.push(skill15);
			skillsVector5.push(skill16);
			skillsVector5.push(skill17);
			
			
			var skillEntry1 = {};
			skillEntry1.key = skillGroup1;
			skillEntry1.values = skillsVector1;
			
			var skillEntry2 = {};
			skillEntry2.key = skillGroup2;
			skillEntry2.values = skillsVector2;
			
			var skillEntry3 = {};
			skillEntry3.key = skillGroup3;
			skillEntry3.values = skillsVector3;
			
			var skillEntry4 = {};
			skillEntry4.key = skillGroup4;
			skillEntry4.values = skillsVector4;
			
			var skillEntry5 = {};
			skillEntry5.key = skillGroup5;
			skillEntry5.values = skillsVector5;
			
			vm.skills.push(skillEntry1);
			vm.skills.push(skillEntry2);
			vm.skills.push(skillEntry3);
			vm.skills.push(skillEntry4);
			vm.skills.push(skillEntry5);
		}

		vm.slider = {
			value : 100,
			options : {
				showSelectionBar : true,
				getSelectionBarColor : function(value) {
					if(value <= 25) 
						return '#383838';
					if (value <= 50)
						return 'grey';
					if (value <= 75)
						return '#B5B5B5';
					if (value <= 100)
						return '#F2F2F2';
					return '#2AE02A';
				}
			}
		};

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
		initializeSkills();
	}
	;
})();