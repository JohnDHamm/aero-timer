'use strict';

exports.seed = function(knex, Promise) {
	return knex('Coaches').del()
		.then(function () {
			return Promise.all([
				knex('Coaches')
					.insert({
						id: 1,
						first_name: 'Jennifer',
						last_name: 'Gentry',
						email: 'jen@aero.com',
						password: 'jenpass',
						admin: true
					}),
				knex('Coaches')
					.insert({
						id: 2,
				    first_name: 'Jeff',
				    last_name: 'Reilly',
				    email: 'jeff@aero.com',
				    password: 'jeffpass',
						admin: true
					}),
				knex('Coaches')
					.insert({
						id: 3,
				    first_name: 'John',
				    last_name: 'Hamm',
				    email: 'john@aero.com',
				    password: 'johnpass',
						admin: false
					}),
				knex('Coaches')
					.insert({
						id: 4,
				    first_name: 'Test',
				    last_name: 'McTesterson',
				    email: 'test@aero.com',
				    password: 'testpass',
						admin: true
					})
			]);
		});
};
