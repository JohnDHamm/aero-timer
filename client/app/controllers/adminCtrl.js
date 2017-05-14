"use strict";

app.controller("adminCtrl", function($scope, $routeParams, $location, UserFactory, DbFactory, TimerFactory, $mdToast, $mdDialog){

	$scope.groups === [];
	$scope.showEditGroupModal = false;
	$scope.editGroup = {};
	let notEmptyGroup = false;
	$scope.showEditAthleteModal = false;
	$scope.editAthlete = {};

	Promise.resolve()
		.then(() => UserFactory.getCurrentCoach())
		.then((coach) => {
			if (coach.admin !== true) {
				$location.path('/login');
			}
			return Promise.all([DbFactory.getGroups(), DbFactory.getAthletes()]);
		})
		.then(([groups, athletes]) => {
			$scope.groups = groups;
			$scope.athletes = formatPace(athletes);
		})
		.then(() => {
			$scope.$apply();
		})
		.catch(console.err)

	$scope.addGroup = () => {
		const newGroup = {
			group_name: $scope.newGroup_name,
			description: $scope.newGroup_desc,
		};
		DbFactory.addGroup(newGroup)
			.then(() => {
				saveChangeToast();
				reloadGroups();
			})
	}

	const reloadGroups = () => {
		DbFactory.getGroups()
			.then((groups) => {
				$scope.groups = groups;
				$scope.newGroup_desc = "";
				$scope.newGroup_name = "";
			})
	}

	$scope.addAthlete = () => {
		const newAthlete = {
			first_name: $scope.newAthlete_first_name,
			last_name: $scope.newAthlete_last_name,
			display_name: $scope.newAthlete_display_name,
			age: $scope.newAthlete_age,
			swim_pace: convertNewPace($scope.newAthlete_swim_pace),
			bike_pace: $scope.newAthlete_bike_pace,
			run_pace: convertNewPace($scope.newAthlete_run_pace),
			group_id: $scope.group_id
		};
		DbFactory.addAthlete(newAthlete)
			.then((data) => {
				saveChangeToast();
				reloadAthletes();
			})
	}

	const reloadAthletes = () => {
		DbFactory.getAthletes()
			.then((athletes) => {
				$scope.athletes = formatPace(athletes);
				$scope.newAthlete_first_name = "";
				$scope.newAthlete_last_name = "";
				$scope.newAthlete_display_name = "";
				$scope.newAthlete_age = "";
				$scope.newAthlete_swim_pace = "";
				$scope.newAthlete_bike_pace = "";
				$scope.newAthlete_run_pace = "";
				$scope.group_id = "";
			})
	}

	const formatPace = (athletesArray) => {
		for ( let i = 0; i < athletesArray.length; i++) {
			athletesArray[i].swim_pace = TimerFactory.timeFormatterMMSS(athletesArray[i].swim_pace);
			athletesArray[i].run_pace = TimerFactory.timeFormatterMMSS(athletesArray[i].run_pace);
		}
		return athletesArray;
	}

	const convertNewPace = (pace) => {
		const paceTimeArray = pace.split(":");
		const min = parseInt(paceTimeArray[0]);
		const sec = parseInt(paceTimeArray[1]);
		const avgPaceMs = Math.trunc((min * 60) + sec) * 1000;
		return avgPaceMs;
	}

	$scope.groupEdit = (id) => {
		$scope.showEditGroupModal = true;
		for (let i = 0; i < $scope.groups.length; i++) {
			if ($scope.groups[i].id === id) {
				$scope.editGroup = $scope.groups[i];
			}
		}
	}

	$scope.saveEditedGroup = () => {
		$scope.showEditGroupModal = false;
		DbFactory.saveEditedGroup($scope.editGroup)
			.then(() => {
				saveChangeToast();
				reloadGroups();
			})
			.then(() => reloadAthletes())
	}

	$scope.cancelEditGroup = () => {
		$scope.showEditGroupModal = false;
		reloadGroups();
	}

	$scope.deleteGroup = (id) => {
		for (let i = 0; i < $scope.athletes.length; i++) {
			if ($scope.athletes[i].group_id === id) {
				notEmptyGroup = true;
				break;
			}
		}
		if (notEmptyGroup) {
			$mdToast.show(
	      $mdToast.simple()
	        .textContent('Cannot delete group because at least one athlete belongs to the group!')
	        .hideDelay(3500)
	    );
		} else {
			DbFactory.deleteGroup(id)
				.then(() => {
					saveChangeToast();
					reloadGroups();
				})
		}
		notEmptyGroup = false;
	}

	$scope.athleteEdit = (id) => {
		for (let i = 0; i < $scope.athletes.length; i++) {
			if ($scope.athletes[i].id === id) {
				$scope.editAthlete = $scope.athletes[i];
			}
		}
		$scope.showEditAthleteModal = true;
	}

	$scope.saveEditedAthlete = () => {
		delete $scope.editAthlete.group_name;
		$scope.editAthlete.swim_pace = convertNewPace($scope.editAthlete.swim_pace);
		$scope.editAthlete.run_pace = convertNewPace($scope.editAthlete.run_pace);

		$scope.showEditAthleteModal = false;
		DbFactory.saveEditedAthlete($scope.editAthlete)
			.then(() => {
				saveChangeToast();
				reloadAthletes();
			})
	}

	$scope.cancelEditAthlete = () => {
		$scope.showEditAthleteModal = false;
		reloadAthletes();
	}

	const saveChangeToast = () => {
		$mdToast.show(
	      $mdToast.simple()
	        .textContent('Changes saved!')
	        .position('bottom right')
	        .hideDelay(2000)
	    );
	}

	$scope.showDeleteAthleteConfirm = function(ev, id) {
		var confirm = $mdDialog.confirm()
					.title('Are you sure?')
					.textContent("Deleting an athlete will remove athlete's data from all past workouts.")
					.ariaLabel('Delete athlete?')
					.targetEvent(ev)
					.ok('delete athlete')
					.cancel('cancel');

		$mdDialog.show(confirm).then(function() {
			DbFactory.getWorkoutsByAthlete(id)
				.then((data) => {
					if (data[0]) {
						DbFactory.deleteWorkoutsByAthlete(id)
							.then(() => {
								DbFactory.deleteAthlete(id)
									.then(() => {
										saveChangeToast();
										reloadAthletes();
									})
							})
					} else {
						DbFactory.deleteAthlete(id)
									.then(() => {
										saveChangeToast();
										reloadAthletes();
									})
					}
				})
		}, function() {
			//cancelled
			});
	};

});
