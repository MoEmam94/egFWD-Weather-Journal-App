// Personal API Key for OpenWeatherMap API
const baseUrl = `api.openweathermap.org/data/2.5/weather?q=`;
const APIkey = '&appid=xxxxxxxxxxxxxxxx';  
/* Global Variables */
let userZipCode = document.getElementById('zip').value;
let userFeeling = document.getElementById('feelings').value;
let userCity = document.getElementById('city').value;
let generateBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener('click', generateData());

// Function called by event listener
async function generateData(){
    //do stuff
}

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */