const baseURL = "https://gianvin.github.io/wdd230";

const linksURL = "https://gianvin.github.io/wdd230/chamber/data/members.json";



async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.members);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const memberDetailsList = document.getElementById("memberDetails");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

display.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "A" && target.classList.contains(details - link)) {
        event.preventDefault();
        const memberId = target.getAttribute("data-member-id");
        displayMemberDetails(memberId);
    }
});

const cards = document.querySelector("#cards");

function displayLinks(members) {
    let cards = document.getElementById("cards");
    cards.innerHTML = "";

    let directory = document.createElement("h4");
    directory.textContent = `Business Directory`;
    cards.appendChild(directory);

    let nameSection = document.createElement("section");
    nameSection = document.createElement("section");
    nameSection.classList.add("card", "list");
    displayCompanyNames(members, nameSection);
    cards.appendChild(nameSection);

}

function displayPicturesAndDetails(members, section) {
    members.forEach((member) => {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHtML = `
        <img src="${member.picture}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <P>Address: ${member.address}</p>
        <p>Contact Number: ${member.phone}</p>
        <p>Website: ${member.websiteURLs}</p>`;

        section.appendChild(card);
    });
}

function displayCompanyNames(members, section) {
    members.forEach((member) => {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${member.name}</h3>
        <P>Address: ${member.address}</p>
        <p>Contact Number: ${member.phone}</p>
        <p>Email Address: ${member.email}</p>
        <p>Website: ${member.websiteURLs}</p>
        <p>Membership Level: ${member.membership}</p> `;

        section.appendChild(card);
    });
}

getLinks();