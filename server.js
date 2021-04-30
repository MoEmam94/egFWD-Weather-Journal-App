// Setup empty JS object to act as endpoint for all routes
let projectData = {}; //

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

//Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const PORT = process.env.PORT || 8000; //allows the app to work in Heroku
app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));

//Default GET Route
app.get('/all', (req, res) => {
    res.send(projectData);
    projectData = {}; //resets the projectData array for the next entries
});

//Default POST route
//post function
app.post('/addData', addData);
function addData(request, response) {
    let data = request.body;
    console.log('server side data ', data);
    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;
    projectData["country"] = data.country;
    projectData["city"] = data.city;
    response.send(projectData);
}
