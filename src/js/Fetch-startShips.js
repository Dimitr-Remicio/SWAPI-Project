// import { result } from "lodash";

const buttons = document.getElementById("buttonstrships");
const starships = document.querySelector("#starships");

let btnNextstrShip;
let btnPreviousstrShip;
let urlStarShips = "https://swapi.dev/api/starships/?page=1";

export function fetchStarShips(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //   console.log("Data basement: ", data);
      DataPeople(data.results);

      btnNextstrShip = data.next
        ? `<button class="btn" data-url=${data.next}>⏩</button>`
        : "";
      btnPreviousstrShip = data.previous
        ? `<button class="btn" data-url=${data.previous}>⏮</button>`
        : "";
      buttons.innerHTML = btnPreviousstrShip + " " + btnNextstrShip;
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchStarShips(urlStarShips);

const DataPeople = async (data) => {
  starships.innerHTML = "";
  try {
    for (let index of data) {
      const resp = await fetch(index.url);
      const resul = await resp.json();
    //   console.log(resul);
      let templateHtml = `
            <div class="ppl-item">
            <div>
            <img src="https://i.postimg.cc/m298VQd5/Recurso-5.png" alt="img not found">
        </div>
            <h2>${resul.name}</h2>
            <a href="${resul.name}">link</a>
        </div>
                </div>
            `;
      starships.innerHTML += templateHtml;
      // const markup = resul.map(() => {

      //     return`
      //     `
      // }).join('');
      // peopleList.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log(error);
  }
};

buttons.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    let value = e.target.dataset.url;
    // console.log(value);
    fetchStarShips(value);
  }
});
