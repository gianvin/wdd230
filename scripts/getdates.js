document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
});


// script for hamburger menu//
const hamButton = document.querySelector('#menu');
const nav =
    document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});
