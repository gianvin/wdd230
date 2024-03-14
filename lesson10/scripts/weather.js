const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=927c80f45d4cb1121616e5d1ffc5c706";

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

        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = desc;
    } catch (error) {
        console.error("An error occured:", error);
    }
}


updatePage();

