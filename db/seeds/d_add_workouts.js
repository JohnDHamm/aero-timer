'use strict';

exports.seed = function(knex, Promise) {
	return knex('Workouts').del()
		.then(function () {
			return Promise.all([

				//AERO workout #1 5x1mi run, CoachTest - HPT
				knex('Workouts')
					.insert({
						description: '5 x 1mi race pace',
						discipline: 'run',
						date: '1473952500000',
						coach_id: 4,
						laps: 5,
						lap_distance: 1,
						lap_metric: 'mile',
						athlete_id: 1,
						data: '[510000,520000,515000,505000,500000]'
					}),
				knex('Workouts')
					.insert({
						description: '5 x 1mi race pace',
						discipline: 'run',
						date: '1473952500000',
						coach_id: 4,
						laps: 5,
						lap_distance: 1,
						lap_metric: 'mile',
						athlete_id: 2,
						data: '[513000,520040,515300,502100,490000]'
					}),
				knex('Workouts')
					.insert({
						description: '5 x 1mi race pace',
						discipline: 'run',
						date: '1473952500000',
						coach_id: 4,
						laps: 5,
						lap_distance: 1,
						lap_metric: 'mile',
						athlete_id: 3,
						data: '[520400,510750,515070,515003,504700]'
					}),
				knex('Workouts')
					.insert({
						description: '5 x 1mi race pace',
						discipline: 'run',
						date: '1473952500000',
						coach_id: 4,
						laps: 5,
						lap_distance: 1,
						lap_metric: 'mile',
						athlete_id: 4,
						data: '[513000,522100,509000,505320,506800]'
					}),
				knex('Workouts')
					.insert({
						description: '5 x 1mi race pace',
						discipline: 'run',
						date: '1473952500000',
						coach_id: 4,
						laps: 5,
						lap_distance: 1,
						lap_metric: 'mile',
						athlete_id: 5,
						data: '[530000,566000,534000,505450,570000]'
					})

				//AERO workout #2 4x2mi bike, CoachTest  - Comp
				// knex('Workouts')
				// 	.insert({
				// 		description: '4 x 2 mi build',
				// 		discipline: 'bike',
				// 		date: '1474226580000',
				// 		coach_id: 4,
				// 		laps: 4,
				// 		lap_distance: 2,
				// 		lap_metric: 'mile',
				// 		athlete_id: 5,
				// 		data: '[515600,522100,516700,543000]'
				// 	}),
				// knex('Workouts')
				// 	.insert({
				// 		description: '4 x 2 mi build',
				// 		discipline: 'bike',
				// 		date: '1474226580000',
				// 		coach_id: 4,
				// 		laps: 4,
				// 		lap_distance: 2,
				// 		lap_metric: 'mile',
				// 		athlete_id: 6,
				// 		data: '[513700,523040,505300,502900]'
				// 	}),
				// knex('Workouts')
				// 	.insert({
				// 		description: '4 x 2 mi build',
				// 		discipline: 'bike',
				// 		date: '1474226580000',
				// 		coach_id: 4,
				// 		laps: 4,
				// 		lap_distance: 2,
				// 		lap_metric: 'mile',
				// 		athlete_id: 7,
				// 		data: '[520000,516000,534500,523450]'
				// 	}),
				// knex('Workouts')
				// 	.insert({
				// 		description: '4 x 2 mi build',
				// 		discipline: 'bike',
				// 		date: '1474226580000',
				// 		coach_id: 4,
				// 		laps: 4,
				// 		lap_distance: 2,
				// 		lap_metric: 'mile',
				// 		athlete_id: 8,
				// 		data: '[522300,520000,552900,534050]'
				// 	}),


				//AERO workout #3 10x100m, CoachTest, all Dev
				// knex('Workouts')
				// 	.insert({
				// 		description: '10 x 100m tempo',
				// 		discipline: 'run',
				// 		date: '1474838220000',
				// 		coach_id: 4,
				// 		laps: 10,
				// 		lap_distance: 100,
				// 		lap_metric: 'meter',
				// 		athlete_id: 9,
				// 		data: '[20000,20200,20340,20100,20500,20050,20270,21340,20600,20400]'
				// 	}),
				// knex('Workouts')
				// 	.insert({
				// 		description: '10 x 100m tempo',
				// 		discipline: 'run',
				// 		date: '1474838220000',
				// 		coach_id: 4,
				// 		laps: 10,
				// 		lap_distance: 100,
				// 		lap_metric: 'meter',
				// 		athlete_id: 10,
				// 		data: '[22500,22300,21320,21060,22300,21250,21280,22040,21200,21400]'
				// 	})
			]);
		});
};
