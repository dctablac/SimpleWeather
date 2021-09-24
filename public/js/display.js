// Change display on search
import { unixToDate, dayOfTheWeek } from "./time.js";
import { formatTemp } from "./temperature.js";

const openWeatherIconUrl = 'http://openweathermap.org/img/wn/';

export function displayCurrentWeather(city, currentWeatherDetails) {
    const iconCode = currentWeatherDetails.weather_description.icon
    const description = currentWeatherDetails.weather_description.description
    const temperature = formatTemp(currentWeatherDetails.current_temp)

    //document.querySelector('.date').innerHTML = unixToDate(Date.now());
    document.querySelector('.location').innerHTML = capitalize(city);
    document.querySelector('.weather-animation-container').innerHTML = weatherIcon(iconCode, "current");
    document.querySelector('.weather-temperature').innerHTML = temperature;
    document.querySelector('.weather-description').innerHTML = description;
}

export function displaySevenDayForecast(forecastWeek) {
    let forecastDays = document.querySelector('.forecast-container').children;
    for (let i = 0; i < 7; i++) {
        forecastDays[i].innerHTML = formatForecast(forecastWeek[i+1]);
    }

}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatForecast(forecastDay) {
    let maxTemp = formatTemp(forecastDay.temp_max);
    let minTemp = formatTemp(forecastDay.temp_min);
    let day = dayOfTheWeek(forecastDay.dt * 1000); // Open weather API provides seconds, we need ms
    let icon = weatherIcon(forecastDay.weather_description.icon);
    

    return `<p class="forecast-day">${day}</p> <div>${icon}</div> <p class="forecast-temps">${maxTemp} | ${minTemp}</p>`;
}

function weatherIcon(newIconCode, type="forecast") {
    if (type === "current") {
        return `<img src="${openWeatherIconUrl + newIconCode + '@2x.png'}"/>`;
    } else {
        return `<img class="forecast-icon" src="${openWeatherIconUrl + newIconCode + '@2x.png'}"/>`;
    }
}