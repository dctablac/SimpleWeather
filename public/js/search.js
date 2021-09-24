import {displayCurrentWeather, displaySevenDayForecast} from "./display.js"

const apiUrl = 'https://dctablac-simple-weather-bckend.herokuapp.com/weather'
const searchButton = document.querySelector('.search-button');
const loadingContainer = document.querySelector('.loading-container');
const searchContainer = document.querySelector('.search-bar-container');
const weatherDisplayContainer = document.querySelector('.weather-display-container');
const forecastContainer = document.querySelector('.forecast-container');

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Show loader
    weatherDisplayContainer.classList = 'hidden';
    forecastContainer.classList = 'hidden';
    searchContainer.classList = 'search-bar-container';
    loadingContainer.classList.toggle('hidden');
    let city = document.querySelector('.search-bar').value;
    let response = await fetch(`${apiUrl}/${city}`);
    let data = await response.json();

    // Manage weather response after received
    if (data.city === null) {
        document.querySelector(".search-msg").innerText = "Please enter a valid city";
    } else {
        weatherDisplayContainer.classList = "weather-display-container";
        forecastContainer.classList = "forecast-container";
        searchContainer.classList = "search-bar-container move-up"
        document.querySelector(".search-msg").innerHTML = "";
        displayCurrentWeather(data.city, data.current_weather);
        displaySevenDayForecast(data.seven_day_forecast)
    }
    loadingContainer.classList.toggle('hidden');
});