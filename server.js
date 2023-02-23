// Require Express
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// GET route to return project data
app.get('/all', function(req, res){
    res.send(projectData);
});

// POST route to add data to project endpoint
app.post('/add', function(req, res){
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }
    res.send(projectData);
});

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log(`server running on localhost: ${port}`);
}
