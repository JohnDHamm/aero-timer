"use strict";

app.controller("coachCtrl", function($scope, UserFactory, $location){

	const currentCoach = UserFactory.getCurrentCoach();
	$scope.coach = currentCoach.first_name;
	$scope.showAdmin = currentCoach.admin;

	if (currentCoach.admin === undefined) {
		$location.path('/login');
	}

});
