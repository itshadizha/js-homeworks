fetch("https://rickandmortyapi.com/api/character")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    render(data.results);
  })
  .catch((error) => {
    console.error("Error", error);
  });

const ul = document.querySelector("#ul");

function render(data) {
  let html = "";

  data.forEach((user) => {
    let statusClass = user.status === "Alive" ? "alive" : user.status === "unknown" ? "unknown" : "dead";

    console.log(statusClass);
    html += `
      <li class="${statusClass}">
        <img onclick="showId(${user.id})" src="${user.image}"></img>
        <p class="name">${user.name}</p>
        <p>${user.status}</p>
      </li>
    `;
  });

  ul.innerHTML = html;
}

function showId(id) {
  alert(id);
}

