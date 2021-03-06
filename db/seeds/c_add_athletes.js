'use strict';

exports.seed = function(knex, Promise) {
	return knex('Athletes').del()
		.then(function () {
			return Promise.all([
				knex('Athletes')
					.insert({
						first_name: 'Makenna',
						last_name: 'Reilly',
						display_name: 'Makenna',
						age: 12,
						group_id: 1,
						swim_pace: 105000,
						bike_pace: 17.7,
						run_pace: 471000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Lucy',
						last_name: 'Rutherford',
						display_name: 'Lucy',
						age: 12,
						group_id: 1,
						swim_pace: 107000,
						bike_pace: 17.2,
						run_pace: 450000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Trinity',
						last_name: 'Waters',
						display_name: 'Trinity',
						age: 11,
						group_id: 1,
						swim_pace: 115000,
						bike_pace: 16.7,
						run_pace: 540000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Wellington',
						last_name: 'McKinney',
						display_name: 'Wellington',
						age: 12,
						group_id: 1,
						swim_pace: 102000,
						bike_pace: 18.2,
						run_pace: 475000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Maya',
						last_name: 'Reilly',
						display_name: 'Maya',
						age: 10,
						group_id: 1,
						swim_pace: 112000,
						bike_pace: 16.9,
						run_pace: 502000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Clara',
						last_name: 'Early',
						display_name: 'Clara',
						age: 12,
						group_id: 1,
						swim_pace: 116000,
						bike_pace: 17.1,
						run_pace: 486000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Miles',
						last_name: 'Butler',
						display_name: 'Miles B',
						age: 12,
						group_id: 1,
						swim_pace: 110000,
						bike_pace: 17.5,
						run_pace: 503000
					}),
				knex('Athletes')
					.insert({
						first_name: 'Ruth',
						last_name: 'Giblin',
						display_name: 'Ruth',
						age: 13,
						group_id: 1,
						swim_pace: 123000,
						bike_pace: 16.8,
						run_pace: 563000
					})
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Devan',
				// 		last_name: 'Reilly',
				// 		display_name: 'Devan',
				// 		age: 9,
				// 		group_id: 2,
				// 		swim_pace: 120000,
				// 		bike_pace: 16.2,
				// 		run_pace: 572000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Gus',
				// 		last_name: 'McGowan',
				// 		display_name: 'Gus',
				// 		age: 13,
				// 		group_id: 2,
				// 		swim_pace: 127000,
				// 		bike_pace: 16.5,
				// 		run_pace: 497000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Seamus',
				// 		last_name: 'Havron',
				// 		display_name: 'Seamus',
				// 		age: 8,
				// 		group_id: 3,
				// 		swim_pace: 135000,
				// 		bike_pace: 14.9,
				// 		run_pace: 620000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Emily',
				// 		last_name: 'Butler',
				// 		display_name: 'EmilyMicah',
				// 		age: 6,
				// 		group_id: 3,
				// 		swim_pace: 135000,
				// 		bike_pace: 14.2,
				// 		run_pace: 695000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Darby',
				// 		last_name: 'Mooney',
				// 		display_name: 'Darby',
				// 		age: 9,
				// 		group_id: 2,
				// 		swim_pace: 118000,
				// 		bike_pace: 16.4,
				// 		run_pace: 585000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Searcy',
				// 		last_name: 'Mooney',
				// 		display_name: 'Searcy',
				// 		age: 10,
				// 		group_id: 2,
				// 		swim_pace: 122000,
				// 		bike_pace: 16.8,
				// 		run_pace: 570000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Jackson',
				// 		last_name: 'Lee',
				// 		display_name: 'Jackson',
				// 		age: 13,
				// 		group_id: 2,
				// 		swim_pace: 125000,
				// 		bike_pace: 15.9,
				// 		run_pace: 620000
				// 	}),
				// knex('Athletes')
				// 	.insert({
				// 		first_name: 'Ryan',
				// 		last_name: 'Lee',
				// 		display_name: 'Ryan',
				// 		age: 11,
				// 		group_id: 2,
				// 		swim_pace: 124000,
				// 		bike_pace: 16.2,
				// 		run_pace: 595000
				// 	})
			]);
		});
};
