document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'ce38c60f6dc20dfbf33624b2d024effc';
    const city = 'Cozumel';
    const latitude = 20.42;
    const longitude = -86.92;

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`

    function fetchCurrentWeather() {
        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                const currentTemp = data.main.temp;
                const humidity = data.main.humidity;
                const iconCode = data.weather[0].icon;

                document.getElementById('current-temp').textContent = `Current Temperature: ${currentTemp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById(weather - icon).src = `http://openweathermap.org/img/wn${iconCode}.png`;
            })
            .catch(error => console.log('error fetching current weather:', error));
    }

    function fetchNextDayForecast() {

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(15, 0, 0, 0);
        const timestamp = Math.round(tomorrow.getTime() / 1000);

        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {

                const forecast = data.list.find(entry => entry.dt === timestamp);
                if (forecast) {
                    const nextDayTemp = forecast.main.temp;

                    document.getElementById('forecast').textContent = `Next Day's Forecast: ${nextDayTemp}°C`;
                }
            })
            .catch(error => console.log('error fetching forecast:', error));
    }

    function displayMaxTemperature(maxTemp) {
        const maxTempDisplay = document.getElementById('max-temp-display');
        const maxTempValue = document.getElementById('max-temp-value');
        maxTempValue.textContent = maxtemp + '°C';
        maxTempDisplay.style.display = 'block';

        document.getElementById('close-maxtemp').addEventListener('click', function () {
            document.getElementById('max-temp-display').style.display = 'none';
        });

        const maxTemp = 30;
        displayMaxTemperature(maxTemp);
    }
    fetchCurrentWeather();
    fetchNextDayForecast()
})