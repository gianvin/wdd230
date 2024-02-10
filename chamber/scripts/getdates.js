document.addEventListener('DOMContentLoaded', function () {
    //script for the date//
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastUpdated").textContent = "Last Updated: " + formattedDate;


    // script for hamburger menu//

    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('.nav');
    const closeButton = document.querySelector('#closeButton');


    hamButton.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    closeButton.addEventListener('click', function () {
        nav.classList.remove('open');
    });



    // script for the toggle switch//
    const modeButton = document.querySelector('.switch input');
    const main = document.querySelector('body');

    modeButton.addEventListener('click', () => {
        if (modeButton.checked) {
            main.style.backgroundColor = '#000';
            main.style.color = '#fff';
        } else if (main) {
            main.style.backgroundColor = 'rgb(79, 180, 119)';
            main.style.color = '#000';
        }

    });

});
