const express = require('express');

const httpcatsRouter = require('../auth/httpcats-router.js');

const server = express();

server.use(express.json());

server.use('/api/httpcats', httpcatsRouter);

server.get('/', (req, res) => {
    res.send("💚 || If you can read this, the API is UP & RUNNING! || 💚")
})

module.exports = server;