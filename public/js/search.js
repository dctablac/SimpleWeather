
// const searchURL = 'api.openweathermap.org/data/2.5/forecast?q=';
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let city = document.getElementById('search-bar').value;
    // let result = await fetch(`${searchURL}${city}&${process.env.API}`);
    // Call python API to retrieve results
    console.log(result);
});

