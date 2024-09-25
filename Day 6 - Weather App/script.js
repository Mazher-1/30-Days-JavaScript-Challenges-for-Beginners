const apiKey = '6e11fb60f2f741ba0bd98b8d5b8a3bb3'

const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherDisplay = document.getElementById('weatherDisplay');
const  cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature')
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');

getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city){
        fetchWeatherData(city);
    }
});

function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert('Error fetching weather data.');
            console.error(error);
        });
}

function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDisplay.classList.remove('hidden');
}