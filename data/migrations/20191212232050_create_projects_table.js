
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      // primary key
      tbl.increments('project_id');

      tbl.text('name')
        .notNullable();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(false);
    })

    .createTable('tasks', tbl => {
      // primary key
      tbl.increments('task_id');

      tbl.text('description')
        .notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);
    })

    .createTable('resources', tbl => {
      // primary key
      tbl.increments('resource_id');

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
