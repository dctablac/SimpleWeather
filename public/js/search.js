const apiUrl = 'http://dctablac-simple-weather-bckend.herokuapp.com/weather'
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let city = document.getElementById('search-bar').value;
    let response = await fetch(`${apiUrl}/${city}`);
    let data = await response.json();
    // Do something with the weather data
    console.log(data);
});


function displayCurrentWeather(currentWeatherDetails) {

}

function displaySevenDayForecast(forecastDetails) {

}