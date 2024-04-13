// Defining variables for Weather Search
const apiKey = '5ccfb87c2313dc93a4278d2086ead169';
const searchBox = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");
const weatherIcon = document.querySelector(".weather-icon");

// Defining Dates
const day0 = new Date();
const day1 = new Date();
const day2 = new Date();
const day3 = new Date();
const day4 = new Date();
const day5 = new Date();
day1.setDate(day0.getDate()+1);
day2.setDate(day0.getDate()+2);
day3.setDate(day0.getDate()+3);
day4.setDate(day0.getDate()+4);
day5.setDate(day0.getDate()+5);


// Function to get todays weather
async function getWeather(city){
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    var data = await apiData.json();
    console.log(data);
    document.getElementById("cityname").innerHTML = data.name;
    document.getElementById("todaydate").innerHTML = `${(day0.getMonth()+1)}/${day0.getDate()}/${day0.getFullYear()}`;
    document.getElementById("todaytemp").innerHTML = `Temperature: ${(Math.round((data.main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("todayhumidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.getElementById("todaywind").innerHTML = `Wind Speed: ${data.wind.speed} MPH`;
}

// Function for 5 day forecast (pulling from seperate API call)
async function getWeather5day(city){
    const apiData5 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    var data5 = await apiData5.json();
    console.log(data5);
}

// Event listener to gather city from user
searchButton.addEventListener('click', () => {
    getWeather(searchBox.value);
    getWeather5day(searchBox.value);
} )
