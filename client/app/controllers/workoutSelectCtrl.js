"use strict";

app.controller("workoutSelectCtrl", function($scope, UserFactory, DbFactory, TimeFormatFactory, $location, DisplayFactory){

	const currentCoach = UserFactory.getCurrentCoach();
	$scope.coach = currentCoach.first_name;

	if (currentCoach.admin === undefined) {
		$location.path('/login');
	}

	$scope.noWorkouts = false;
	$scope.showDeleteWorkoutModal = false;
	const workoutsListDiv = document.getElementById('workoutsList');
	let delWorkoutsModal = document.getElementById('deleteWorkoutModal');
	workoutsListDiv.addEventListener('click', function(e) {
		let modalOffsetTop = e.target.offsetTop - 20;
		delWorkoutsModal.style.top = modalOffsetTop + "px";
	})
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

	$scope.deleteWorkout = (date) => {
		$scope.showDeleteWorkoutModal = true;
		$scope.workoutToDeleteDate = date;
	}

	const removeWorkoutFromArray = (date) => {
		for (let i = 0; i < $scope.workouts.length; i++) {
			if ($scope.workouts[i].date == date) {
				$scope.workouts.splice(i, 1);
			}
		}
	}

	$scope.removeWorkout = () => {
		$scope.showDeleteWorkoutModal = false;
		DbFactory.deleteWorkoutsByDate($scope.workoutToDeleteDate)
			.then(() => {
				removeWorkoutFromArray($scope.workoutToDeleteDate);
			})
	}

	$scope.cancelDeleteWorkout = () => {
		$scope.showDeleteWorkoutModal = false;
	}

});
