const apiKey = '5ccfb87c2313dc93a4278d2086ead169';
const searchBox = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city){
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    var data = await apiData.json();
    console.log(data);
    document.getElementById("cityname").innerHTML = data.name;
    document.getElementById("todaytemp").innerHTML = `Temperature: ${(Math.round((data.main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("todayhumidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.getElementById("todaywind").innerHTML = `Wind Speed: ${data.wind.speed} MPH`;
}


async function getWeather5day(city){
    const apiData5 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    var data5 = await apiData5.json();
    console.log(data5);
}


searchButton.addEventListener('click', () => {
    getWeather(searchBox.value);
    getWeather5day(searchBox.value);
} )