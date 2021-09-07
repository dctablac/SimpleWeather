const apiUrl = 'https://dctablac-simple-weather-bckend.herokuapp.com/weather'
//const apiUrl = "http://127.0.0.1:5000/weather";
const searchButton = document.getElementById('search-button');
const openWeatherIconUrl = 'http://openweathermap.org/img/wn/'


searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let city = document.getElementById('search-bar').value;
    let response = await fetch(`${apiUrl}/${city}`);
    let data = await response.json();
    // Do something with the weather data
    if (data.city === null) {
        alert('Please enter a valid city');
    } else {
        console.log(data)
        displayCurrentWeather(data.city, data.current_weather);
        displaySevenDayForecast(data.seven_day_forecast)
    }
});


function displayCurrentWeather(city, currentWeatherDetails) {
    const iconCode = currentWeatherDetails.weather_description.icon
    const description = currentWeatherDetails.weather_description.description
    const temperature = currentWeatherDetails.current_temp

    document.querySelector('#date').innerHTML = Date.now();
    document.querySelector('#location').innerHTML = city;
    document.querySelector('#weather-animation-container').innerHTML = `<img src="${openWeatherIconUrl+iconCode+'@2x.png'}"/>`
    document.querySelector('#weather-temperature').innerHTML = temperature;
    document.querySelector('#weather-description').innerHTML = description;
}

function displaySevenDayForecast(forecastDetails) {
    console.log(forecastDetails);
}