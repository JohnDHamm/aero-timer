"use strict";

app.controller("workoutSelectCtrl", function($scope, UserFactory, DbFactory, TimeFormatFactory, $location, DisplayFactory, $mdDialog){

	const currentCoach = UserFactory.getCurrentCoach();
	$scope.coach = currentCoach.first_name;

	if (currentCoach.admin === undefined) {
		$location.path('/login');
	}

	$scope.noWorkouts = false;
	const swimFilterIcon = document.getElementById('filterIcon--swim');
	const bikeFilterIcon = document.getElementById('filterIcon--bike');
	const runFilterIcon = document.getElementById('filterIcon--run');


	DbFactory.getWorkoutsByCoach(currentCoach.coach_id)
		.then((workouts) => {
			if (workouts.length === 0) $scope.noWorkouts = true;
			const allCoachWorkouts = filterWorkoutsByDate(workouts);
			$scope.workouts = allCoachWorkouts;
		})



	const filterWorkoutsByDate = (workouts) => {
		const allDates = [];
		for (let i = 0; i < workouts.length; i++) {
			allDates.push(workouts[i].date)
		}
		const filteredDates = allDates.filter (function (value, index, array) {
				return array.indexOf (value) == index;
		});

		const filteredWorkouts = [];
		for (let i = 0; i < filteredDates.length; i++) {
			const newObj = {};
			for (let j = 0; j < workouts.length; j++) {
				if (workouts[j].date === filteredDates[i]) {
					newObj.description = workouts[j].description;
					newObj.discIcon = DisplayFactory.getDiscIcon(workouts[j].discipline);
					newObj.discipline = workouts[j].discipline;
					newObj.date = workouts[j].date;
					newObj.formattedDate = TimeFormatFactory.dateFormatter(parseInt(workouts[j].date));
					newObj.show = true;
				}
			}
			filteredWorkouts.push(newObj);
		}
		return filteredWorkouts;
	};

	$scope.filter = (discipline) => {
		switch (discipline) {
			case 'swim':
				swimFilterIcon.classList.toggle('inactiveIcon');
				break;
			case 'bike':
				bikeFilterIcon.classList.toggle('inactiveIcon');
				break;
			case 'run':
				runFilterIcon.classList.toggle('inactiveIcon');
				break;
		}
		filterByDisc(discipline);
	}

	const filterByDisc = (disc) => {
		for (let i = 0; i < $scope.workouts.length; i++) {
			if ($scope.workouts[i].discipline === disc) {
				$scope.workouts[i].show = !$scope.workouts[i].show;
			}
		}
	}

	$scope.goToWorkout = (workoutDate) => {
		$location.path(`/workoutview/${workoutDate}`)
	}

	$scope.showDeleteConfirm = function(ev, date) {
		var confirm = $mdDialog.confirm()
					.title('Are you sure?')
					.textContent('Deleting a workout removes all data for this workout for all athletes that were recorded.')
					.ariaLabel('Delete workout?')
					.targetEvent(ev)
					.ok('delete workout')
					.cancel('cancel');

		$mdDialog.show(confirm).then(function() {
			DbFactory.deleteWorkoutsByDate(date)
			.then(() => {
				removeWorkoutFromArray(date);
			})
		}, function() {
		});
	};

	const removeWorkoutFromArray = (date) => {
		for (let i = 0; i < $scope.workouts.length; i++) {
			if ($scope.workouts[i].date == date) {
				$scope.workouts.splice(i, 1);
			}
		}
	}

});
