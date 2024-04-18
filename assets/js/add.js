const searchBox2 = document.querySelector("#search input");
const searchButton2 = document.querySelector("#search button");
const cityList = document.getElementById("search-history");
const citiesLocal = localStorage.getItem("cityList") ? JSON.parse(localStorage.getItem("cityList")) : [];

function addCity() {
    const value = searchBox2.value;

    if (!value) return;

    const newCity = document.createElement("button");

    newCity.innerText = value;

    cityList.appendChild(newCity);

    citiesLocal.push(value);
    localStorage.setItem('cityList', JSON.stringify(citiesLocal));

    searchBox2.value = "";
};

searchButton2.addEventListener('click', () => {
    addCity();
})

function addExistingCities(getCities) {
    for (i = 0; i < getCities.length; i++) {
        const addExistingCity = document.createElement("button");
        addExistingCity.innerText = getCities[i];
        cityList.appendChild(addExistingCity)
    }
}

addExistingCities(citiesLocal);