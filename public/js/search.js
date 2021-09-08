import {displayCurrentWeather, displaySevenDayForecast} from "./display.js"

const apiUrl = 'https://dctablac-simple-weather-bckend.herokuapp.com/weather'
//const apiUrl = "http://127.0.0.1:5000/weather";
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let city = document.getElementById('search-bar').value;
    let response = await fetch(`${apiUrl}/${city}`);
    let data = await response.json();
    // Do something with the weather data
    if (data.city === null) {
        document.querySelector("#search-msg").innerHTML = "Please enter a valid city";
    } else {
        document.querySelector("#search-msg").innerHTML = "";
        displayCurrentWeather(data.city, data.current_weather);
        displaySevenDayForecast(data.seven_day_forecast)
    }
});