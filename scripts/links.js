const baseURL = "https://gianvin.github.io/wdd230";

const linksURL = "https://gianvin.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(lessons) {
    lessons.forEach((lesson) => {
        let card = document.createElement("li");

        lesson.links.forEach((link) => {
            let linkElement = document.createElement("a");
            linkElement.href = `${baseURL}/${link.url}`;
            linkElement.target = "_blank";
            card.appendChild(linkElement)

            let breakElement = document.createElement("br");
            card.appendChild(breakElement);
        });

        cards.appendChild(card);
    });
}

getLinks();