// start writing from here
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
require('dotenv').config()
const { Router } = require('express')
const { todoRouter } = require('./routes/todo')

app.use(express.json());

require('dotenv').config()

app.use('/api/v1/', todoRouter);

app.listen(env.process.PORT).then(() => console.log(`Listening on Port ${env.process.PORT}`)).catch((e) => console.error(`${e} error found`))