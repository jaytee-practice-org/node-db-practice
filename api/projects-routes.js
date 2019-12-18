const express = require('express');

// setup route
const router = express.Router();

// enables database access (projects.db3)
const database = require('./projects-methods');

// CRUD functionality
// GET
router.get('/projects', (req, res) => {
  database.find()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(400).json({message: 'Unable to retrieve users from database'});
    })
});

router.get('/projects/:id', (req, res) => {
  database.findById(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(error => {
      res.status(404).json({message: 'The user with the specified ID could not be found'});
    })
});

// export router variable so it can be used in the server.js file
module.exports = router;