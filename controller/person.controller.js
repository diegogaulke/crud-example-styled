// Single responsability
// https://github.com/johnpapa/angular-styleguide#style-y001

// https://github.com/johnpapa/angular-styleguide#style-y010
(function() {
	'use strict';

	// https://github.com/johnpapa/angular-styleguide#style-y024
	angular
		.module('crud')
		.controller('PersonController', PersonController);

	function PersonController() {
		// https://github.com/johnpapa/angular-styleguide#style-y032
		var vm = this;
		vm.personEmail;
		vm.personName;
		vm.persons = [
			{personName: 'Diego Gaulke', personEmail: 'insonix@gmail.com'} ,
			{personName: 'Theodore Roosevelt', personEmail: 'roosevelt@whitehouse.com'}
		];

		// https://github.com/johnpapa/angular-styleguide#style-y033
		vm.addPerson = addPerson;
		vm.removePerson = removePerson;

		/**
			According to https://github.com/johnpapa/angular-styleguide#style-y035 
			the logic of addPerson() and removePerson() should be in a service.
			I prefer to leave the logic here for better understanding of the code.
		**/
		
		function addPerson() {
			vm.persons.push({personName: vm.personName, personEmail: vm.personEmail}	);
			vm.personName = '';
			vm.personEmail = '';
		}

		function removePerson(person) {
			var index = vm.persons.indexOf(person);
			if (index > -1) {
				vm.persons.splice(index, 1);
			}
		}
	}

})();