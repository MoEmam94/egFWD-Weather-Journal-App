// Personal API Key for OpenWeatherMap API
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let APIkey = ',US&appid=6f76c811c4a679443a3cec40829ff6a1&units=metric';

// Global Variables 
const generateBtn = document.getElementById('generate');
const dateEl =  document.getElementById('date');
const tempEl =  document.getElementById('temp');
const contentEl =  document.getElementById('content');
const cityEl =  document.getElementById('city');
const countryEl =  document.getElementById('country');

// Function to GET Web API Data
const getData = async (Url, zipCode, key) => {
    const res = await fetch(Url+zipCode+key);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(err) {
        console.log(`Error: ${err}`);
    }
};

// Function called by event listener
const generateData = () => {
let userZipCode = document.getElementById('zip').value;
let userFeeling = document.getElementById('feelings').value;
if (!/^[0-9]{5}(?:-[0-9]{4})?$/.test(userZipCode)) { //Checking for a valid US zipcode
    document.getElementById('alertZipCode').classList.remove('d-none'); //Show Warning notification
} else {
    document.getElementById('alertZipCode').classList.add('d-none');  //Rehide Warning notification
    getData(baseUrl, userZipCode, APIkey)
    .then((data) => {
        console.log(data);
        postData('/addData', {
            country: data.sys.country,
            temp: data.main.temp,
            feeling: userFeeling,
            date:newDate,
            city: data.name
            });
        updateUI(); //Updates Website User Interface
    });
}
};

// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener('click', generateData);


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


// Function to POST data 
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),    
  });

    try {
      const newData = await response.json();
        return newData;
    }catch(err) {
    console.log(`Error: ${err}`);
    }
};

// Function to GET Project Data 
const updateUI = async() =>{
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        countryEl.innerHTML = `Country: ${allData.country}`;
        cityEl.innerHTML = `City: ${allData.city}`;
        dateEl.innerHTML = `Date: ${allData.date}`;
        tempEl.innerHTML = `Temperature: ${allData.temp} °C   /   ${(allData.temp *(9/5)) + 32} °F`;
        contentEl.innerHTML = `I feel: ${allData.feel || 'nothing?!'}`;
    } catch(err){
        console.log('error',err);
    }
};