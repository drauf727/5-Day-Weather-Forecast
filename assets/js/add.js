const searchBox2 = document.querySelector("#search input");
const searchButton2 = document.querySelector("#search button");
const cityList = document.getElementById("search-history");

function addCity() {
    const value = searchBox2.value;

    if (!value) return;

    const newCity = document.createElement("button");
    newCity.innerText = value;

        cityList.appendChild(newCity);

        searchBox2.value = "";
};

searchButton2.addEventListener('click', () => {
 addCity();
} )