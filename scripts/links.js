const baseURL = "https://gianvin.github.io/wdd230";

const linksURL = "https://gianvin.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(lessons) {
    let cards = document.getElementById("cards");
    cards.innerHTML = "";

    let card = document.createElement("ul");
    let activities = document.createElement("h3");
    activities.textContent = `Learning Activities`;
    card.appendChild(activities);



    lessons.forEach((lesson) => {


        let weekHeader = document.createElement("h4");
        weekHeader.textContent = `Week: ${lesson.lesson}:`;
        card.appendChild(weekHeader);




        lesson.links.forEach((link) => {
            let linkElement = document.createElement("li");
            let linkAnchor = document.createElement("a");
            linkAnchor.href = `${baseURL}/${link.url}`;
            linkAnchor.target = "_blank";
            linkAnchor.textContent = `${link.title}`;

            linkElement.appendChild(linkAnchor);
            card.appendChild(linkElement);

        });

        cards.appendChild(card);
    });
}

getLinks();