const form = document.getElementById("email_form");

document.addEventListener("DOMContentLoaded", async () => {
 const listDiv = document.getElementById("data-list");
 const userDataResponse = await fetch(
  "https://jsonplaceholder.typicode.com/users"
 );
 const userList = await userDataResponse.json();

 userList.forEach((user) => {
  const div = document.createElement("div");
  div.innerHTML = user.name;
  listDiv.appendChild(div);
 });
});

form.addEventListener("submit", async (event) => {
 event.preventDefault();

 const data = new FormData(form);

 const success = await fetch("https://formspree.io/f/mqkodrgg", {
  method: "POST",
  body: JSON.stringify({
   Subject: data.get("subject")
  })
 });

 const dialog = document.getElementById("success_dialog");
 const div = document.createElement("div");
 div.innerHTML = success;
 dialog.appendChild(div);
 dialog.showModal();
});
