document.addEventListener("DOMContentLoaded", function () {
    var lastUpdatedDate = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', seconds: 'numeric' };
    var formattedDate = lastUpdatedDate.toLocaleDateString('en-US', options);

    document.getElementById("lastUpdated").textContent = "Last Updated: " + formattedDate;
})

