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
    document.getElementById("todaywind").innerHTML = `Wind Speed: ${data.wind.speed} MPH`;
    document.getElementById("todayhumidity").innerHTML = `Humidity: ${data.main.humidity}%`;
}

// Function for 5 day forecast (pulling from seperate API call)
async function getWeather5day(city){
    const apiData5 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    var data5 = await apiData5.json();
    console.log(data5);
    
    document.getElementById("day1date").innerHTML = `${(day1.getMonth()+1)}/${day1.getDate()}/${day1.getFullYear()}`;
    document.getElementById("day1temp").innerHTML = `Temperature: ${(Math.round((data5.list[0].main.temp-273.15)*1.8+32))}°F`;
    document.getElementById("day1wind").innerHTML = `Wind Speed: ${data5.list[0].wind.speed} MPH`;
    document.getElementById("day1humidity").innerHTML = `Humidity: ${data5.list[0].main.humidity}%`;

    document.getElementById("day2date").innerHTML = `${(day2.getMonth()+1)}/${day2.getDate()}/${day2.getFullYear()}`;
    document.getElementById("day2temp").innerHTML = `Temperature: ${(Math.round((data5.list[8].main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("day2wind").innerHTML = `Wind Speed: ${data5.list[8].wind.speed} MPH`;
    document.getElementById("day2humidity").innerHTML = `Humidity: ${data5.list[8].main.humidity}%`;

    document.getElementById("day3date").innerHTML = `${(day3.getMonth()+1)}/${day3.getDate()}/${day3.getFullYear()}`;
    document.getElementById("day3temp").innerHTML = `Temperature: ${(Math.round((data5.list[16].main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("day3wind").innerHTML = `Wind Speed: ${data5.list[16].wind.speed} MPH`;
    document.getElementById("day3humidity").innerHTML = `Humidity: ${data5.list[16].main.humidity}%`;


    document.getElementById("day4date").innerHTML = `${(day4.getMonth()+1)}/${day4.getDate()}/${day4.getFullYear()}`;
    document.getElementById("day4temp").innerHTML = `Temperature: ${(Math.round((data5.list[24].main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("day4wind").innerHTML = `Wind Speed: ${data5.list[24].wind.speed} MPH`;
    document.getElementById("day4humidity").innerHTML = `Humidity: ${data5.list[24].main.humidity}%`;


    document.getElementById("day5date").innerHTML = `${(day5.getMonth()+1)}/${day5.getDate()}/${day5.getFullYear()}`;
    document.getElementById("day5temp").innerHTML = `Temperature: ${(Math.round((data5.list[32].main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("day5wind").innerHTML = `Wind Speed: ${data5.list[32].wind.speed} MPH`;
    document.getElementById("day5humidity").innerHTML = `Humidity: ${data5.list[32].main.humidity}%`;
}

// Event listener to gather city from user
searchButton.addEventListener('click', () => {
    getWeather(searchBox.value);
    getWeather5day(searchBox.value);
} )
