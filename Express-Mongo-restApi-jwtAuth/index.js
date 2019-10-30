const express = require('express');
const auth = require('./routes/Auth')
const dashboard = require('./routes/dashboard');
const mongoose = require("mongoose");
const body_parser = require('body-parser')
const cors = require('cors');
require('dotenv').config();

// assign express to app
const app = express();

// database connection
mongoose.connect(process.env.DATABASE_PATH,{ useNewUrlParser: true },console.log("database connected !"));

// middleware functions
app.use(cors);
app.use(body_parser.json());
app.use('/auth',auth);
app.use('/dashboard',dashboard);

// server starting process
app.listen(4000, () => console.log('Server running on port 4000 🔥'));