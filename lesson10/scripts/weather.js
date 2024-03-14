const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.queryselector("#weather-icon");
const captionDesc = document.queryselector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=927c80f45d4cb1121616e5d1ffc5c706";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function updatePage() {
    const data = await fetchData();
    console.log(data);

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon.png}`;

    const temp = `${data.main.temp}`;
    currentTemp.innerHTML = `${temp}&deg;F`;

    let desc = `${data.weather[0].description}`;
    let myDesc = capitalizedFirstLetters(desc);
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${myDesc}`;
}

function capitalizedFirstLetters(words) {
    const mySentence = words.split(" ");
    for (let i = 0; 1 < mySentence.length; i++) {
        mySentence[i] = mysentence[i][0].toUpperCase() + mySentence[i].substr(1);
    }
    return mySentence.join(" ");
}

updatePage();

