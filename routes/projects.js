const express = require('express');

//creating the router
const router = express.Router();

// **the routes below will start with whatever initial route for the API that exists on the server.js file. In this case it is /api/projects/. So the GET single request will happen on /api/projects/:id

// GET all projects
router.get('/', (req, res) => {
    res.json({mssg: 'GET all projects'})
})

// GET single project
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single project'})
})

// POST new project
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new project'})
})

// DELETE project
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a project'})
})

// UPDATE a project
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a project'})
})


module.exports = router;