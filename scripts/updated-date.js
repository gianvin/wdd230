document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };
    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastUpdated").textContent = "Last Updated: " + formattedDate;
})

