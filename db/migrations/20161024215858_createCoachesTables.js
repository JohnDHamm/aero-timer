module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('Coaches', table => {
  	table.increments();
  	table.string('login').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
  	table.string('password');
    table.boolean('admin');
    table.boolean('workout_admin');
  	table.boolean('archive');;
  })
};

module.exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Coaches')
};
