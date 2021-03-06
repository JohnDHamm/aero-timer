'use strict';

exports.seed = function(knex, Promise) {
	return knex('Groups').del()
		.then(function () {
			return Promise.all([
				knex('Groups')
					.insert({
						group_name: 'HPT',
						description: 'High Performance Team'
					}),
				knex('Groups')
					.insert({
						group_name: 'Yellow',
						description: 'Development Team - ages 9+'
					}),
				knex('Groups')
					.insert({
						group_name: 'Red',
						description: 'Development Team - ages 6-8'
					})
			]);
		});
};
