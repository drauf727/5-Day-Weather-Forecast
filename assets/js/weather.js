// Defining variables for Weather Search
const apiKey = '5ccfb87c2313dc93a4278d2086ead169';
const searchBox = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");
const weatherIcon = document.querySelector("#todayimage");
const weatherDetailPhoto = document.querySelector("#todaydetailedphoto");

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
    document.getElementById("todaydate").innerHTML = `${(day0.getMonth()+1)}/${day0.getDate()}`;
    document.getElementById("todaytemp").innerHTML = `Temp: ${(Math.round((data.main.temp-273.15)*1.8+32))} °F`;
    document.getElementById("todaywind").innerHTML = `Wind Speed: ${data.wind.speed} MPH`;
    document.getElementById("todayhumidity").innerHTML = `Hum: ${data.main.humidity}%`;

    // Adding image to side of todays weather
    if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = "./assets/images/cloud.png";
    } else if(data.weather[0].main == 'Thunderstorm'){
        weatherIcon.src = "./assets/images/rain.png";
    } 
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "./assets/images/rain.png";
    } 
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "./assets/images/rain.png";
    } 
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "./assets/images/snow.png";
    } 
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "./assets/images/sun.png";
    } 
    else {
        weatherIcon.src = "./assets/images/fog.png";
    }

    if (data.weather[0].main == 'Clouds'){
        weatherDetailPhoto.src = "./assets/images/clouddetail.jpg";
    } else if(data.weather[0].main == 'Thunderstorm'){
        weatherIcon.src = "./assets/images/thunder2.jpg";
    } 
    else if(data.weather[0].main == 'Drizzle'){
        weatherDetailPhoto.src = "./assets/images/drizzledetail.jpg";
    } 
    else if(data.weather[0].main == 'Rain'){
        weatherDetailPhoto.src = "./assets/images/rainydetail.jpg";
    } 
    else if(data.weather[0].main == 'Snow'){
        weatherDetailPhoto.src = "./assets/images/snowdetail.jpg";
    } 
    else if(data.weather[0].main == 'Clear'){
        weatherDetailPhoto.src = "./assets/images/clear2detail.jpg";
    } 
    else {
        weatherDetailPhoto.src = "./assets/images/unknowndetail.jpg";
    }
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


// Adding photos to 5 day forcast using for loop instead of retyping code

async function getWeather5dayPhotos(city){
    const apiData5 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    var data5Photos = await apiData5.json();
    console.log(data5Photos);
    
   for (let n=0; n<33; n+=8) {
    if (data5Photos.list[n].weather[0].main == 'Clouds'){
        document.getElementById("imageday" + n).src = "./assets/images/cloud.png";
    } else if(data5Photos.list[n].weather[0].main == 'Thunderstorm'){
        document.getElementById("imageday" + n).src = "./assets/images/rain.png";
    } 
    else if(data5Photos.list[n].weather[0].main == 'Drizzle'){
        document.getElementById("imageday" + n).src = "./assets/images/rain.png";
    } 
    else if(data5Photos.list[n].weather[0].main == 'Rain'){
        document.getElementById("imageday" + n).src = "./assets/images/rain.png";
    } 
    else if(data5Photos.list[n].weather[0].main == 'Snow'){
        document.getElementById("imageday" + n).src = "./assets/images/snow.png";
    } 
    else if(data5Photos.list[n].weather[0].main == 'Clear'){
        document.getElementById("imageday" + n).src = "./assets/images/sun.png";
    } 
    else {
        document.getElementById("imageday" + n).src = "./assets/images/fog.png";
    }
}
}




// Event listener to gather city from user
searchButton.addEventListener('click', () => {
    getWeather(searchBox.value);
    getWeather5day(searchBox.value);
    getWeather5dayPhotos(searchBox.value)
} )
