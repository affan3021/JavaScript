const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('search');
const clearBtn = document.getElementById('clear');

const heading = document.getElementById('heading');
const dispLoc = document.getElementById('dispLoc');
const temp = document.getElementById('temp');
const time = document.getElementById('time');
const feelsLike = document.getElementById('feels-like');

async function fetchWeatherData(loc) 
{
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=ffccb9fe118b4a7583193912250910&q=${loc}&aqi=no`);
    const report = await data.json();
    return report;
}

searchBtn.addEventListener('click', async () => {
    const userLoc = cityInput.value.trim();
    if (!userLoc) 
    {
        alert('Please enter a valid location!');
        return;
    }

    const weatherUpdate = await fetchWeatherData(userLoc);

    heading.innerHTML = `Weather Update for ${weatherUpdate.location.name}`;
    dispLoc.innerHTML = `Location: ${weatherUpdate.location.name}, ${weatherUpdate.location.country}`;
    time.innerHTML = `Local Time: ${weatherUpdate.location.localtime}`;
    temp.innerHTML = `Temperature: ${weatherUpdate.current.temp_c}°C`;
    feelsLike.innerHTML = `Feels Like: ${weatherUpdate.current.feelslike_c}°C`;
});

clearBtn.addEventListener('click', () =>
{
    cityInput.value = '';
    heading.innerHTML = '';
    dispLoc.innerHTML = '';
    time.innerHTML = '';
    temp.innerHTML = '';
    feelsLike.innerHTML = '';
});