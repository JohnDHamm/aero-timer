"use strict";

app.factory("DbFactory", function($q, $http) {

	const getAllCoaches = () =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getAllCoaches`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const addCoach = coachObj =>
		$q((resolve, reject) =>
			$http
				.post(`/api/addCoach`, coachObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getCoach = coach_id =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getCoach/${coach_id}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getGroups = () =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getGroups`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const addGroup = groupObj =>
		$q((resolve, reject) =>
			$http
				.post(`/api/addGroup`, groupObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const saveEditedGroup = groupObj =>
		$q((resolve, reject) =>
			$http
				.put(`/api/editGroup/${groupObj.id}`, groupObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const deleteGroup = id =>
		$q((resolve, reject) =>
			$http
				.delete(`/api/deleteGroup/${id}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getAthletesByGroup = group_id =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getAthletes/Group/${group_id}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getAthletes = () =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getAthletes`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const addAthlete = athleteObj =>
		$q((resolve, reject) =>
			$http
				.post(`/api/addAthlete`, athleteObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const saveEditedAthlete = athleteObj =>
		$q((resolve, reject) =>
			$http
				.put(`/api/editAthlete/${athleteObj.id}`, athleteObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const deleteWorkoutsByAthlete = athlete_id =>
	$q((resolve, reject) =>
		$http
			.delete(`/api/deleteWorkoutsByAthlete/${athlete_id}`)
			.then(({data}) => data ? resolve(data) : reject(null))
		)

	const deleteAthlete = athlete_id =>
	$q((resolve, reject) =>
		$http
			.delete(`/api/deleteAthlete/${athlete_id}`)
			.then(({data}) => data ? resolve(data) : reject(null))
		)

	const saveWorkout = workoutObj =>
		$q((resolve, reject) =>
			$http
				.post(`/api/saveWorkout`, workoutObj)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getWorkoutsByDate = date =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getWorkouts/Date/${date}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getWorkoutsByCoach = coach_id =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getWorkouts/Coach/${coach_id}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const getWorkoutsByAthlete = athlete_id =>
		$q((resolve, reject) =>
			$http
				.get(`/api/getWorkouts/Athlete/${athlete_id}`)
				.then(({data}) => data ? resolve(data) : reject(null))
		)

	const deleteWorkoutsByDate = date =>
	$q((resolve, reject) =>
		$http
			.delete(`/api/deleteWorkoutsByDate/${date}`)
			.then(({data}) => data ? resolve(data) : reject(null))
		)


	return { getAllCoaches, getCoach, addCoach, getGroups, addGroup, saveEditedGroup, deleteGroup, getAthletesByGroup, getAthletes, addAthlete, saveEditedAthlete, deleteWorkoutsByAthlete, deleteAthlete, saveWorkout, getWorkoutsByDate, getWorkoutsByCoach, getWorkoutsByAthlete, deleteWorkoutsByDate }

});
