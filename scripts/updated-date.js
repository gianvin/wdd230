//document.addEventListener("DOMContentLoaded", function () {
//var lastModifiedDate = new Date();

//var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };

// var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

// document.getElementById("lastModified").textContent = "Last Updated: " + formattedDate;
//})//

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

document.getElementById('lastUpdated').textContent = getCurrentDate();


