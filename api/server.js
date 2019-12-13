const express = require('express');
const helmet = require('helmet');

// setup server and middleware
const server = express();
server.use(helmet());
server.use(express.json()); //parses Request Objects into JSON so the server can recognize the incoming data

// sanity check (pinging endpoint checks if the server is even running)
server.get('/', (req, res) => {
  res.send('API is up and running');
})

module.exports = server;