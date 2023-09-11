console.clear();

// allows us to use PORT variable and hide information
require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
// requiring the routes from the file
const projectRoutes = require('./routes/projects');

// express app
const app = express();

// middleware (log requests coming)
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/projects/', projectRoutes);

const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI

// connect to db
mongoose.connect(MONGO)
    .then(() => {
        // listen for requests
        app.listen(PORT, (err) =>
        err
        ? console.error(err)
        : console.log(`Server is running on http://localhost:${PORT}..`)
        );    
    })
    .catch((err) => {
        console.log(err)
    })