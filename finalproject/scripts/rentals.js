document.addEventListener("DOMContentLoaded", function () {

    const baseURL = "https://gianvin.github.io/wdd230";
    const linksURL = "https://gianvin.github.io/wdd230/finalproject/data/rentaltype.json";

    let rentals = [];

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
        card.innerHTML = `<img src="${rental.image}" alt="${rental.brand}" />
        <h3>${rental.brand}</h3>
        <P>Max Persons: ${rental.capacity}</p>`;
        return card;
    }
    function displayGrid() {
        cards.innerHTML = "";
        rentals.forEach(rental => {
            cards.appendChild(createCard(rental));
        });
    }
    function displayList() {
        rentalList.innerHTML = "";
        rentals.forEach(rental => {
            rentalList.appendChild(createListItem(rental));
        });
    }

    fetch(linksURL)
        .then(response => response.json())
        .then(data => {
            rentals = data.rentals;

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


