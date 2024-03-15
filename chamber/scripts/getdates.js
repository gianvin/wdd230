document.addEventListener('DOMContentLoaded', function () {
    //script for the date//
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    var lastUpdatedElement = document.getElementById("lastUpdated");
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = "Last Updated: " + formattedDate;
    }



    // script for hamburger menu//

    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('.nav');
    const closeButton = document.querySelector('#closeButton');


    hamButton.addEventListener('click', function () {
        if (nav) {
            nav.classList.toggle('open');
        }

    });

    closeButton.addEventListener('click', function () {
        if (nav) {
            nav.classList.remove('open');
        }

    });



    // script for the toggle switch//
    const modeButton = document.querySelector('.switch input');
    const main = document.querySelector('body');

    modeButton.addEventListener('click', () => {
        if (modeButton.checked) {
            main.style.backgroundColor = '#000';
            main.style.color = '#fff';
        } else {
            main.style.backgroundColor = 'rgb(79, 180, 119)';
            main.style.color = '#000';
        }

    });

});

//scipt for local storage//

const sidebar = document.querySelector('aside');
if (sidebar) {
    const visitTimestamp = localStorage.getItem('visitTimestamp');
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const currentTimestamp = new Date().getTime();

    if (!visitTimestamp) {
        // if first visit//
        sidebar.innerHTML = `<h3> Welcome! Let us know if you have any questions?</h3>`;
        localStorage.setItem('visitTimestamp', currentTimestamp);
    } else {
        const daysSinceLastVisit = Math.floor((currentTimestamp - visitTimestamp) / oneDayInMillis);

        if (daysSinceLastVisit === 0) {
            sidebar.innerHTML = `<h6> Back so soon! Awesome!</h6>`;

        } else if (daysSinceLastVisit === 1) {
            sidebar.innerHTML = `<h6>You last visited 1 day ago.</h6>`;
        } else {
            sidebar.innerHTML = `<h6>You last visited ${daysSinceLastVisit} days ago. </h6>`;
        }

    }
};

//script for weather data //
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast");


const apiKey = "927c80f45d4cb1121616e5d1ffc5c706";
const latitude = 14.77;
const longitude = 121.02;

async function fetchWeatherData() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`

    const [currentResponse, forecastResponse] = await Promise.all([fetch(currentWeatherUrl), fetch(forecastUrl)]);
    const [currentData, forecastData] = await Promise.all([currentResponse.json(), forecastResponse.json()]);
    return { currentData, forecastData };
}

async function updatePage() {
    try {
        const { currentData, forecastData } = await fetchWeatherData();

        if (!currentData || !currentData.weather || currentData.weather.length === 0) {
            throw new Error("Current weather data not available");
        }

        const currentTempValue = Math.round(currentData.main.temp);
        currentTemp.innerHTML = `${currentTempValue}&deg;F`;

        const desc = currentData.weather[0].description.charAt(0).toUpperCase() + currentData.weather[0].description.slice(1);
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = desc;

        renderForecast(forecastData);
    } catch (error) {
        console.error("An error occured:", error);
    }
}

function renderForecast(forecastData) {
    forecastContainer.innerHTML = "";

    for (let i = 0; i < forecastData.list.length; i += 8) {
        const forecastItem = forecastData.list[i];
        const forecastTemp = Math.round(forecastItem.main.temp);
        const forecastDesc = forecastItem.weather[0].description.charAt(0).toUpperCase() + forecastItem.weather[0].description.slice(1);
        const forecastIcon = `https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`;

        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecast-card");
        forecastCard.innerHTML = `<img src="${forecastIcon}" alt="${forecastDesc}">
        <div>
            <p>${forecastTemp}&deg;F</p>
            <p>${forecastDesc}</p>
        </div>`;
        forecastContainer.appendChild(forecastCard);
    }
}


updatePage();