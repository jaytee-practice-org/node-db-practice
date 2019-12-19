const database = require('../data/db-config');

module.exports = {
  getAllProjects,
  getProjectById,
  getAllTasks,
  getTaskById,
  getTasksByProjectId
}

// returns an array of projects
function getAllProjects() {
  return database('projects');
}

// returns a single project
function getProjectById(id){
  return database('projects')
    .where('id', id)
    .first();
}

// returns all tasks
function getAllTasks() {
  return database('tasks');
}

// returns a specific task by its id
function getTaskById(id) {
  return database('tasks')
    .where('id', id)
    .first();
}

// returns all tasks associated with a specific project
function getTasksByProjectId(id) {
  return database('tasks')
    .where('project_id', id)
}