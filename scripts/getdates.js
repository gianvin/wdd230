document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
});


// script for hamburger menu//
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.nav');
const closeButton = document.querySelector('#closeButton');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
    hamButton.classList.remove('open');
});

//script for local storage page visits//

const pageVisitsDisplay = document.querySelector('#visits');

let pageVisits = Number(window.localStorage.getItem("pageVisits-localStorage")) || 0;

if (pageVisits !== 0) {
    pageVisitsDisplay.textContent = `Page Visits: ${pageVisits}`;
} else {

    pageVisitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

pageVisits++;
localStorage.setItem("pageVisits-localStorage", pageVisits);



