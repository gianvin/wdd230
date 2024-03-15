document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
});


// script for hamburger menu//
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.nav');
const closeButton = document.querySelector('#closeButton');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
    hamButton.classList.remove('open');
});

//script for local storage page visits//

const pageVisitsDisplay = document.querySelector('#visits');

let pageVisits = Number(window.localStorage.getItem("pageVisits-localStorage")) || 0;

if (pageVisits !== 0) {
    pageVisitsDisplay.textContent = `Page Visits: ${pageVisits}`;
} else {

    pageVisitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

pageVisits++;
localStorage.setItem("pageVisits-localStorage", pageVisits);

//script for Weather API//
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=14.77&lon=121.02&units=imperial&appid=927c80f45d4cb1121616e5d1ffc5c706";
async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function updatePage() {
    try {
        const data = await fetchData();
        console.log(data);

        if (!data || !data.weather || data.weather.length === 0) {
            throw new Error("Weather data not available");
        }

        const temp = Math.round(data.main.temp);
        currentTemp.innerHTML = `${temp}&deg;F`;

        let desc = "";
        for (let i = 0; i < data.weather.length; i++) {
            desc += `${data.weather[i].description.charAt(0).toUpperCase()}${data.weather[i].description.slice(1)}`;
            if (i !== data.weather.length - 1) {
                desc += ", ";
            }
        }

        weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = desc;
    } catch (error) {
        console.error("An error occured:", error);
    }
}


updatePage();