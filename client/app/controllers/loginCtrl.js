"use strict";

app.controller("loginCtrl", function($scope, UserFactory, DbFactory, $location){

	$scope.noUser = false;
	$scope.errorMsg = null;
	$scope.user = false;

	$scope.showRegister = false;
	$scope.showSelectTeam = false;
	$scope.showCreateTeam = false;
	$scope.showRegisterForm = false;


	$scope.login = () => {
		let regUser = false;
		$scope.noUser = false;
		$scope.errorMsg = null;
		const userObj = {
			login: $scope.loginName,
			password: $scope.password
		}

		DbFactory.getAllCoaches()
			.then((coachesArray) => {
				coachesArray.forEach((coach) => {
					if (coach.login === userObj.login && coach.password === userObj.password && coach.archive !== true) {
						regUser = true;
						UserFactory.setCurrentCoach(coach);
						$location.path('/coach');
					} else if (coach.login === userObj.login && coach.archive !== true) {
						$scope.errorMsg = "password is incorrect";
						regUser = true;
					}
				})
			})
			.then(() => {
				if (!regUser) {
					$scope.noUser = true;
				}
			})
	}

});
