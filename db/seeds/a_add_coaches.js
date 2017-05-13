'use strict';

exports.seed = function(knex, Promise) {
	return knex('Coaches').del()
		.then(function () {
			return Promise.all([
				knex('Coaches')
					.insert({
						id: 1,
						login: 'Jen',
						first_name: 'Jennifer',
						last_name: 'Gentry',
						email: 'aerotriclub@gmail.com',
						password: 'jenpass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						id: 2,
						login: 'Jeff',
				    first_name: 'Jeff',
				    last_name: 'Reilly',
				    email: 'jeff.reilly@atkinsglobal.com',
				    password: 'jeffpass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						id: 3,
						login: 'John',
				    first_name: 'John',
				    last_name: 'Hamm',
				    email: 'johndhamm1@gmail.com',
				    password: 'johnpass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						id: 4,
						login: 'test',
				    first_name: 'Test',
				    last_name: 'McTesterson',
				    email: 'johndhamm1@gmail.com',
				    password: 'testpass',
						admin: false,
						workout_admin: true,
						archive: false
					})
			]);
		});
};
