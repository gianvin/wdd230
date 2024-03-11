const baseURL = "https://gianvin.github.io/wdd230";

const linksURL = "https://gianvin.github.io/wdd230/chamber/data/member.json";



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

    displayMember(members);
}

function displayMember(members) {
    members.forEach((member) => {
        //elements to add in the div.cards element in html
        let card = document.createElement("section");
        let company = document.createElement("h4");
        let location = document.createElement("p");
        let number = document.createElement("p");
        let email = document.createElement("p");
        let website = document.createElement("url")
        let membership = document.createElement("p")

        //h2 content to show the prophet's full name, birthdate and birthplace
        company.textContent = `${member.name}`;
        location.textContent = `Address: ${member.address}`;
        number.textContent = `Contact Number: ${member.phone}`;
        email.textContent = `Email Address: ${member.email}`;
        website.textContent = `Website: ${member.websiteURLs}`;
        membership.textContent = `Membership Level: ${member.membership}`;


        //Append the section card()) with the created element
        card.appendChild(company);
        card.appendChild(location);
        card.appendChild(number);
        card.appendChild(email);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    })
}
async function getMemberData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data.members);
        displayMembers(data.memberss);
    } catch (error) {
        console.error("Error fetching member data:", error)
    }
}

getLinks();
