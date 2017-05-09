"use strict";

app.controller("workoutSetupCtrl", function($scope, WorkoutFactory, UserFactory, DbFactory, $location){

	const currentCoach = UserFactory.getCurrentCoach();
	$scope.coach = currentCoach.first_name;

	$scope.saveWorkoutParams = () => {
		let setupObj = {
			description: $scope.description,
			discipline: $scope.discipline,
			laps: $scope.laps,
			lap_distance: $scope.lap_distance,
			lap_metric: $scope.lap_metric,
			coach_id: currentCoach.coach_id
		};

		WorkoutFactory.setCurrentWorkoutParams(setupObj);
		//go to timer page
		$location.path("/selectathletes");
	};

});
