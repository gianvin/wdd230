document.addEventListener("DOMContentLoaded", function () {

    const baseURL = "https://gianvin.github.io/wdd230";

    const linksURL = "https://gianvin.github.io/wdd230/finalproject/data/rentaltype.json";

    let rental = [];

    const cards = document.getElementById("cards");
    const rentalList = document.getElementById("rentalList");

    function createListItem(rental) {
        const li = document.createElement("li");
        li.innerHTML = `
        <h3>${rental.brand}</h3>
        <P>Max. Persons: ${rental.capacity}</p>
        <p>Half Day Reservation: ${rental.hdreservation}</p>
        <p>Full Day Reservation: ${rental.fdreservation}</p>
        <p>Half Day Walk-In: ${rental.hdwalkin}</p>
        <p>Full Day Walk-In: ${rental.fdwalkin}</p> `;
        return li;
    }

    function createCard(rental) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${rental.image}" alt="${rental.name}" />
        <h3>${rental.name}</h3>
        <P>Max Persons: ${rental.capacity}</p>`;
        return card;
    }
    function displayGrid() {
        cards.innerHTML = "";
        rental.forEach(_rental => {
            cards.appendChild(createCard(_rental));
        });
    }
    function displayList() {
        rentalList.innerHTML = "";
        rental.forEach(_rental => {
            rentalList.appendChild(createListItem(_rental));
        });
    }
    fetch(linksURL)
        .then(response => response.json())
        .then(data => {
            rental = data.rental;

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
