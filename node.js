const apiKey = 'e2f3596ac6af5dba394e2ddb3e10e641';

const city = document.getElementById('city'); // Element that displays the city name
const temperature = document.getElementById('temperature'); // Element that displays the temperature
const description = document.getElementById('description'); // Element that displays the weather description
const icon = document.getElementById('icon'); // Element that displays the weather icon

// Function to fetch weather data from the OpenWeatherMap API
async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to update the web page with weather data
function updateUI(data) {
  city.textContent = data.name;
  temperature.textContent = `${data.main.temp}°C`;
  description.textContent = data.weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  icon.setAttribute('src', iconUrl);
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', async function() {
  const cityName = document.getElementById('city-name').value;
  const weatherData = await getWeather(cityName);
  updateUI(weatherData);
});
