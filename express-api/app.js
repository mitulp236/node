const express = require("express");
const app = express();
const mongoose = require('mongoose');
const body_parser = require('body-parser');
app.use(body_parser.json());
require('dotenv/config');


// import routes
const postRoutes = require('./routes/posts');

app.use('/posts',postRoutes);


//Routes

app.get("/",(req,res) =>{
    res.send("hey i am here ! ")
});

/// connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },
                    () => console.log("db connected  !"))

app.listen(4000);