'use strict';

const express = require('express');
const config = require('../db/knexfile').development
const knex = require('knex')(config)

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()

app.set('port', port)

app.use(express.static('client'))
app.use(bodyParser.json())


// APIs

app.get('/api/getAllCoaches', (req, res) => {
	knex('Coaches')
		.select('*')
		.then((data) => {
			res.json(data)
		})
})

app.get('/api/getCoach/:coach_id', (req, res) => {
	const coach_id = req.params.coach_id
	knex('Coaches')
		.select('*')
		.where('id', coach_id)
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/addCoach', (req, res) => {
	knex('Coaches')
		.insert(req.body)
		.then((data) => {
			res.json(data) //returns new id#
		})
})

app.get('/api/getGroups', (req, res) => {
	knex('Groups')
		.select('*')
		.orderBy('group_name')
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/addGroup', (req, res) => {
	knex('Groups')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.put('/api/editGroup/:group_id', (req, res) => {
	const group_id = req.params.group_id;
	knex('Groups')
		.where('id', group_id)
		.update(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.delete('/api/deleteGroup/:group_id', (req, res) => {
	const group_id = req.params.group_id;
	knex('Groups')
		.where('id', group_id)
		.del(req.body)
		.then((data) => {
			res.json(data)
		})

})

app.get('/api/getAthletes', (req, res) => {
	const team_id = req.params.team_id
	knex('Athletes')
		.join('Groups', 'Athletes.group_id', 'Groups.id')
		.select('Athletes.*', 'Groups.group_name')
		.orderBy('Athletes.display_name')
		.then((data) => {
			res.json(data)
		})
})

app.get('/api/getAthletes/Group/:group_id', (req, res) => {
	const group_id = req.params.group_id
	knex('Athletes')
		.select('*')
		.where('group_id', group_id)
		//.orderBy('Athletes.run_pace')
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/addAthlete', (req, res) => {
	knex('Athletes')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.put('/api/editAthlete/:athlete_id', (req, res) => {
	const athlete_id = req.params.athlete_id
	knex('Athletes')
		.where('id', athlete_id)
		.update(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.delete('/api/deleteWorkoutsByAthlete/:athlete_id', (req, res) => {
	const athlete_id = req.params.athlete_id;
	knex('Workouts')
		.where('athlete_id', athlete_id)
		.del(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.delete('/api/deleteAthlete/:athlete_id', (req, res) => {
	const athlete_id = req.params.athlete_id;
	knex('Athletes')
		.where('id', athlete_id)
		.del(req.body)
		.then((data) => {
			res.json(data)
		})
})


app.get('/api/getWorkouts/Date/:date', (req, res) => {
	const date = req.params.date
	knex('Workouts')
		.join('Athletes', 'Workouts.athlete_id', 'Athletes.id')
		.select('Workouts.*', 'Athletes.display_name')
		.where('date', date)
		.then((data) => {
			res.json(data)
		})
})

app.get('/api/getWorkouts/Coach/:coach_id', (req, res) => {
	const coach_id = req.params.coach_id
	knex('Workouts')
		// .join('Athletes', 'Workouts.athlete_id', 'Athletes.id')
		// .join('Groups', 'Athletes.group_id', 'Groups.id')
		.select('Workouts.description', 'Workouts.discipline', 'Workouts.date')
		.where('coach_id', coach_id)
		.then((data) => {
			res.json(data)
		})
})


app.get('/api/getWorkouts/Athlete/:athlete_id', (req, res) => {
	const athlete_id = req.params.athlete_id
	knex('Workouts')
		.select('*')
		.where('athlete_id', athlete_id)
		.then((data) => {
			res.json(data)
		})
})

//need to limit by user's team
app.get('/api/getWorkouts/Discipline/:discipline', (req, res) => {
	const discipline = req.params.discipline
	knex('Workouts')
		.select('*')
		.where('discipline', discipline)
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/saveWorkout', (req, res) => {
	knex('Workouts')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.delete('/api/deleteWorkoutsByDate/:date', (req, res) => {
	const date = req.params.date
	knex('Workouts')
		.where('date', date)
		.del()
		.then((data) => {
			res.json(data)  //returns # of deleted workouts
		})
})



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
