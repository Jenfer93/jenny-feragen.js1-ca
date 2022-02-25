const detailsContainer = document.querySelector(".details-container");

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  gameId = params.get("id");

console.log(gameId);

const url = "https://www.mmobomb.com/api1/game?id=";
const proxy = "https://noroffcors.herokuapp.com/"
const corsFixed = proxy + url + gameId;


async function gameDetails() {

  try {

    const response = await fetch(corsFixed);
    const details = await response.json();
    console.log(details);

    detailsContainer.innerHTML = "";
    

    detailsContainer.innerHTML += 
    `
    <h1>${details.title}</h1>
    <div>
    <h2>Information:</h2>
    <p>${details.short_description}</p>
    <p>Genre: <span>${details.genre}</span></p>
    <p>Availability status: <span class="status">${details.status}</span></p>
    </div>
    `

  } catch (error) {
    detailsContainer.innerHTML = "Ooobs, something is wrong";
    console.log(error);
  }

}
gameDetails()