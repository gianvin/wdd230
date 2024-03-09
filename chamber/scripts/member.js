const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const memberDetailsList = document.getElementById("memberDetails");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

display.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "A" && target.classList.contains(details - link)) {
        event.preventDefault();
        const memberId = target.getAttribute("data-member-id");
        displayMemberDetails(memberId);
    }
});

fetch("data/members.json")

    .then(response => response.json())
    .then(data => generateBusinessDirectory(data.members))
    .catch(error => console.error("Error fetching data:", error));

function generateBusinessDirectory(members) {
    const directoryList = document.getElementById("directoryList");

    members.forEach((member) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
    <h3>${member.name}</h3>
    <p>Address: ${member.address}</p>
    <p>Contact Number: ${member.phone}</p>
    <p>Email: ${member.email}</p>
    <p>Website: ${member["website URLs"]}</p>
    <p>Membership Level: ${member["Membership level"]}</p>
    `;

        directoryList.appendChild(listItem);

    });

}
