const url = 'https://brotherblazzard.github.io/canvas-content/latter-dayprophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();
