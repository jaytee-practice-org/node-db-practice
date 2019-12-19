const express = require('express');

// setup route
const router = express.Router();

// enables database access (projects.db3)
const database = require('./projects-methods');

// CRUD functionality
// *** GET ***
// get all projects
router.get('/projects', (req, res) => {
  database.getAllProjects()
    .then(projects => {
      res.status(200).json(formatObject(projects))
    })
    .catch(error => {
      res.status(400).json({message: 'Unable to retrieve users from database'});
    })
});

// get a specific project by its id
router.get('/projects/:id', (req, res) => {
  database.getProjectById(req.params.id)
    .then(project => {
      if(project) {
        res.status(200).json(formatObject(project));
      } else {
        res.status(404).json({message: 'The user with the specified ID could not be found'});
      }
    })
    .catch(error => {
      res.status(500).json({message: 'Error communicating with database, failed to get project by ID'});
    })
});

// get all tasks
router.get('/tasks', (req, res) => {
  database.getAllTasks()
    .then(tasks => {
      res.status(200).json(formatObject(tasks));
    })
    .catch(error => {
      res.status(500).json({message: 'Error communicating with database'});
    })
});

// get a specific task by its id
router.get('/tasks/:id', (req, res) => {
  database.getTaskById(req.params.id)
    .then(task => {
      if(task) {
        res.status(200).json(formatObject(task));
      } else {
        res.status(404).json({message: `A task with the associated id of ${req.params.id} does not exist`});
      }
    })
    .catch(error => {
      res.status(500).json({message: 'Error communicating with database'});
    })
});

// get a list of tasks associated with a specific project
router.get('/tasks/projects/:id', (req, res) => {
  database.getProjectById(req.params.id)
    .then(project => {
      // check if a project with the provided id exists
      if (project) {
        // if that project does exist, check if there are any tasks associated with it
        database.getTasksByProjectId(req.params.id)
          .then(tasks => {
            if(tasks && tasks.length > 0) {
              res.status(200).json(formatObject(tasks));
            } else {
              res.status(404).json({message: `There are no tasks associated with project id ${req.params.id}`})
            }
          })
      } else {
        res.status(404).json({message: `Project with an id of ${req.params.id} does not exist`})
      }
    })
    .catch(error => {
      res.status(500).json({message: 'Error communicating with database'})
    })
});



// *** OTHER FUNCTIONS ***

// convert 'completed' property to boolean (instead of 0 or 1) when returning to user
function formatObject(param) {
  if (param.length) {
    return param.map(item => ({...item, completed: !!item.completed}));
  } else {
    param.completed = !!param.completed;
    return param;
  }
}

// export router variable so it can be used in the server.js file
module.exports = router;