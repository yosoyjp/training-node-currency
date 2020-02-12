const express = require('express');
const logger = require('morgan');

const app = express();

const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);



module.exports = app;
