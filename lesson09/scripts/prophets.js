const url = 'https://brotherblazzard.github.io/canvas-content/latter-dayprophets.json';

const cards = document.querySelector("#cards");



const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //elements to add in the div.cards element in html
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");

        //h2 content to show the prophet's full name, birthdate and birthplace
        fullName.textContent = `${prophet.name} ${prophet, lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Pace of Birth: ${prophet.birthplace}`;
        // build image portrait by setting all the relevant attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        //Append the section (crad) with the created element
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}
async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();
