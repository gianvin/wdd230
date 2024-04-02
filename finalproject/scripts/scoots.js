document.addEventListener('DOMContentLoaded', function () {

    // script for hamburger menu//

    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('.nav');
    const closeButton = document.querySelector('#closeButton');


    function toggleNav() {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamButton.style.display = 'block';
            closeButton.style.display = 'none';
        } else {
            nav.classList.add('open');
            hamButton.style.display = 'none';
            closeButton.style.display = 'block';
        }

    }

    hamButton.addEventListener("click", toggleNav);

    closeButton.addEventListener('click', toggleNav);

    function handleButtonVisibility() {
        if (window.innerWidth < 768 && !nav.classList.contains('open')) {
            hamButton.style.display = 'block';
            closeButton.style.display = 'none';
        } else {
            hamButton.style.display = 'none';
            closeButton.style.display = 'none';
        }
    }

    window.addEventListener("load", handleButtonVisibility);
    window.addEventListener('resize', handleButtonVisibility);

    // script for the toggle switch//
    const modeButton = document.querySelector('.switch input');
    const modeText = document.querySelector('.mode-text');
    const main = document.querySelector('body');

    modeButton.addEventListener('click', () => {
        if (modeButton.checked) {
            main.style.backgroundColor = '#000';
            main.style.color = '#fff';
            modeText.textContent = 'Dark Mode'
        } else {
            main.style.backgroundColor = 'white';
            main.style.color = '#000';
            modeText.textContent = 'Light Mode';
        }

    });

});