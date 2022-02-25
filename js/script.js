const url = "https://www.mmobomb.com/api1/games/";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixed = proxy + url;
const container = document.querySelector(".container");


async function getGames () {
  try { 
    const response = await fetch (corsFixed);
    const results = await response.json();

    console.log(results);
    
    container.innerHTML = "";

    function createGameCard (){
      for (let i = 0; i <results.length; i++){

        if(!results[i].platform === "PC (Windows)") {
          continue;
        } 


        container.innerHTML += `<a href="details.html?id=${results[i].id}" class="game">
                                  <div>
                                  <h2>${results[i].title}</h2>
                                  <p>Created by: <span>${results[i].developer}</span></p>
                                  <p>Platform: <span>${results[i].platform}</span></p>
                                  </div>
                                </a>`

      }

    }

  } catch (error){
  console.log(error);
  container.innerHTML = "Obs, something went wrong";
  }

  createGameCard ()
} 

getGames ()