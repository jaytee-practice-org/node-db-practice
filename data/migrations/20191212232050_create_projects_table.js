
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      // primary key
      tbl.increments();

      tbl.text('name')
        .notNullable();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(false);
    })

    .createTable('tasks', tbl => {
      // primary key
      tbl.increments();

      tbl.text('description')
        .notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);
      // foreign key that points to the projects table, a project can have multiple tasks, but a task can only belong to one project
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        // Setting a CASCADE value for onUpdate and onDelete enables the ability to update or delete data points and all references to it
        // By default, referenced data points are unable to be updated/deleted
        .onUpdate('CASCADE')
        // RESTRICT allows you to delete data referred to by a foreign key only if no other data relies on it. e.g. deleting a customer record when there are customer orders referring to it. A customer who has made no orders could be safely deleted.
        .onDelete('CASCADE')
    })

    .createTable('resources', tbl => {
      // primary key
      tbl.increments();

      tbl.text('name')
        .notNullable();
      tbl.text('description');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
