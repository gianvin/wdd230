document.addEventListener("DOMContentLoaded", function () {

    const baseURL = "https://gianvin.github.io/wdd230";

    const linksURL = "https://gianvin.github.io/wdd230/chamber/data/members.json";

    let members = [];

    const cards = document.getElementById("cards");
    const directoryList = document.getElementById("directoryList");


    function createListItem(member) {
        const li = document.createElement("li");
        li.innerHTML = `
        <h3>${member.name}</h3>
        <P>Address: ${member.address}</p>
        <p>Contact Number: ${member.phone}</p>
        <p>Email Address: ${member.email}</p>
        <p>Website: ${member.websiteURLs}</p>
        <p>Membership Level: ${member.membership}</p> `;
        return li;
    }

    function createCard(member) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${member.picture}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <P>Address: ${member.address}</p>
        <p>Contact Number: ${member.phone}</p>
        <p>Website: ${member.websiteURLs}</p>`;

        return card;
    }
    function displayGrid() {
        cards.innerHTML = "";
        members.forEach(member => {
            cards.appendChild(createCard(member));
        });
    }
    function displayList() {
        directoryList.innerHTML = "";
        members.forEach(member => {
            directoryList.appendChild(createListItem(member));
        });
    }

    fetch(linksURL)
        .then(response => response.json())
        .then(data => {
            members = data.members;

            displayGrid();
        })
        .catch(error => console.error("Error fetching data:", error));

    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    if (gridButton && listButton) {
        gridButton.addEventListener("click", function () {
            displayGrid();
        });
        listButton.addEventListener("click", function () {
            displayList();
        });
    }
});


