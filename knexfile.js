// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (connection, done) => {
        // runs after a connection is made to the SQLite engine
        connection.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

};
