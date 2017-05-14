'use strict';

exports.seed = function(knex, Promise) {
	return knex('Coaches').del()
		.then(function () {
			return Promise.all([
				knex('Coaches')
					.insert({
						login: 'Jen',
						first_name: 'Jennifer',
						last_name: 'Gentry',
						email: 'temp@temp.com',
						password: 'temppass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						login: 'Jeff',
				    first_name: 'Jeff',
				    last_name: 'Reilly',
				    email: 'temp@temp.com',
				    password: 'temppass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						login: 'John',
				    first_name: 'John',
				    last_name: 'Hamm',
				    email: 'temp@temp.com',
				    password: 'temppass',
						admin: true,
						workout_admin: true,
						archive: false
					}),
				knex('Coaches')
					.insert({
						login: 'test',
				    first_name: 'Testy',
				    last_name: 'McTesterson',
				    email: 'temp@temp.com',
				    password: 'temppass',
						admin: false,
						workout_admin: true,
						archive: false
					})
			]);
		});
};
