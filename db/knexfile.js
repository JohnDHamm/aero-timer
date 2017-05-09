// Update with your config settings.

module.exports = {

	development: {
		client: 'pg',
		connection: 'postgres://localhost:5432/aero-timer',
		seeds: {
			directory: './seeds'
		},
		migrations: {
			directory: './migrations'
		},
		useNullAsDefault: true
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};
