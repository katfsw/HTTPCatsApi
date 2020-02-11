const express = require('express');

const catsRouter = require('../auth/httpcats-router.js');

const server = express();

server.use(express.json());

server.use('/api/httpcats', catsRouter);

server.get('/', (req, res) => {
    res.send("💚 || If you can read this, the API is UP & RUNNING! || 💚")
})

module.exports = server;