document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastUpdated").textContent = "Last Updated: " + formattedDate;
});

// script for hamburger menu//
document.addEventListener("DOMContentLoader", function () {
    const hamButton = document.querySelector("#menu");
    const nav = document.querySelector('.nav');
    const closeButton = document.querySelector('#closeButton');

    hamButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    closeButton.addEventListener('click', () => {
        nav.classList.remove('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

});
// script for the mode//
const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main");

modeButton.addEventListener("click", () => {
    if (main && modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else if (main) {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});
