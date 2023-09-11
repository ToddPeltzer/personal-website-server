// allows us to use PORT variable and hide information
require('dotenv').config();

const express = require("express");
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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
});