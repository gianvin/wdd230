async function fetchData() {
    const city = 'Marilao, Philippines';
    const apiKey = '927c80f45d4cb1121616e5d1ffc5c706';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const currentTemp = data.main.temp;
        const windSpeed = data.wind.speed;

        document.getElementById('current-temp').textContent = `Temperature: ${currentTemp}\u2103`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

        const windChill = calculateWindChill(currentTemp, windSpeed);
        document.getElementById(`windChill`).textContent = `Wind Chill: ${windChill}\u2103`;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }

}


function calculateWindChill(currentTemp, windSpeed) {

    const windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
}

window.addEventListener('load', fetchData); 