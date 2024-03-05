const url = 'https://brotherblazzard.github.io/canvas-content/latter-dayprophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //elements to add in the div.cards element in html
        let card = document.createElement('section');
        let fullName = document.createElement('Wilford Woodruff');
        let portrait = document.createElement('img');

        //h2 content to show the prophet's full name
        fullName.textContent = `${prophet.wilfordWoodruff} Wilford Woodruff`;
        // build image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        porttrait.setAttribute('alt', `Portrait of ${prophet.wilfordWoodruff_} Wilford Woodruff`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the section (crad) with the created element
        card.appendChild(Wilford);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
