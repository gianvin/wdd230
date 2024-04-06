document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "927c80f45d4cb1121616e5d1ffc5c706";
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
                document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
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
                const forecastList = data.list;
                if (forecastList && forecastList.length > 0) {
                    let closestForecast = null;
                    let minDifference = Infinity;

                    forecastList.forEach(forecast => {
                        const forecastTime = new Date(forecast.dt * 1000);
                    })
                    const tomorrowDate = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);

                    const nextDayForecast = forecastList.find(forecast => {
                        const forecastDate = new Date(forecast.dt * 1000);
                        console.log('Forecast Date:', forecastDate);
                        return (
                            forecastDate.getDate() === tomorrow.getDate() &&
                            forecastDate.getHours() === 15
                        );
                    });

                    if (nextDayForecast) {

                        const temperature = nextDayForecast.main.temp;
                        const weatherDescription = nextDayForecast.weather[0].description;
                        const humidity = nextDayForecast.main.humidity;

                        console.log('Next day Forecast:');
                        console.log('Temperature:', temperature);
                        console.log('Weather description:', weatherDescription);
                        console.log('Humidity:', humidity);
                    } else {
                        console.log('No forecast available for tomorrow');
                    }

                }
            })
            .catch(error => console.log('error fetching forecast:', error));
    }





    function displayMaxTemperature(maxTemp) {
        const maxTempDisplay = document.getElementById('max-temp-display');
        const maxTempValue = document.getElementById('max-temp-value');
        maxTempValue.textContent = maxTemp + '°C';
        maxTempDisplay.style.display = 'block';

        document.getElementById('close-maxtemp').addEventListener('click', function () {
            document.getElementById('max-temp-display').style.display = 'none';
        });


    }


    const maxTemp = 37;
    fetchCurrentWeather();
    fetchNextDayForecast();
    displayMaxTemperature(maxTemp);

});