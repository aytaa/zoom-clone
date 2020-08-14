const express = require('express');
const app = express();
const logger = require('morgan');
const server = require('http').Server(app);

app.use(logger('combined'));

app.get('/' , (req, res) => {
     res.render('room');
});







server.listen(4000);