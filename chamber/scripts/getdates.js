document.addEventListener('DOMContentLoaded', function () {
    //script for the date//
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    var lastUpdatedElement = document.getElementById("lastUpdated");
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = "Last Updated: " + formattedDate;
    }



    // script for hamburger menu//

    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('.nav');
    const closeButton = document.querySelector('#closeButton');


    hamButton.addEventListener('click', function () {
        if (nav) {
            nav.classList.toggle('open');
        }

    });

    closeButton.addEventListener('click', function () {
        if (nav) {
            nav.classList.remove('open');
        }

    });



    // script for the toggle switch//
    const modeButton = document.querySelector('.switch input');
    const main = document.querySelector('body');

    modeButton.addEventListener('click', () => {
        if (modeButton.checked) {
            main.style.backgroundColor = '#000';
            main.style.color = '#fff';
        } else {
            main.style.backgroundColor = 'rgb(79, 180, 119)';
            main.style.color = '#000';
        }

    });

});

//scipt for local storage//

const sidebar = document.querySelector('aside');
if (sidebar) {
    const visitTimestamp = localStorage.getItem('visitTimestamp');
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const currentTimestamp = new Date().getTime();

    if (!visitTimestamp) {
        // if first visit//
        sidebar.innerHTML = `<h3> Welcome! Let us know if you have any questions?</h3>`;
        localStorage.setItem('visitTimestamp', currentTimestamp);
    } else {
        const daysSinceLastVisit = Math.floor((currentTimestamp - visitTimestamp) / oneDayInMillis);

        if (daysSinceLastVisit === 0) {
            sidebar.innerHTML = `<h6> Back so soon! Awesome!</h6>`;

        } else if (daysSinceLastVisit === 1) {
            sidebar.innerHTML = `<h6>You last visited 1 day ago.</h6>`;
        } else {
            sidebar.innerHTML = `<h6>You last visited ${daysSinceLastVisit} days ago. </h6>`;
        }

    }
};
