// creating variables from HTML
const searchBox2 = document.querySelector("#search input");
const searchButton2 = document.querySelector("#search button");
const cityList = document.getElementById("search-history");

// setting local storage
const citiesLocal = localStorage.getItem("cityList") ? JSON.parse(localStorage.getItem("cityList")) : [];


// function to add a city button once searched
function addCity() {
    const value = searchBox2.value;

    if (!value) return;

    const newCity = document.createElement("button");

    newCity.innerText = value;
    newCity.classList = "cityButton";
    newCity.setAttribute("onclick",buttonSearch);
    function buttonSearch(){
        console.log('working?');
        y = value;
        getWeather(y);
    }

    cityList.appendChild(newCity);

    citiesLocal.push(value);
    localStorage.setItem('cityList', JSON.stringify(citiesLocal));

    searchBox2.value = "";
};

// event listener to call function
searchButton2.addEventListener('click', () => {
    addCity();
})

// adding buttons for cities already in local storage
function addExistingCities(getCities) {
    for (i = 0; i < getCities.length; i++) {
        const addExistingCity = document.createElement("button");
        addExistingCity.innerText = getCities[i];
        addExistingCity.classList = "cityButton";
        cityList.appendChild(addExistingCity)
    }
}

// calling function
addExistingCities(citiesLocal);