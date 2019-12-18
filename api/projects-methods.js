const database = require('../data/db-config');

module.exports = {
  find,
  findById
}

// returns an array of projects
function find() {
  return database('projects');
}

// returns a single project
function findById(id){
  return database('projects')
    .where('project_id', id)
    .first();
}