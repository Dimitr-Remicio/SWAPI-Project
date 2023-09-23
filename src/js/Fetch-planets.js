// import { result } from "lodash";

const buttons = document.getElementById("buttonplanet");
const planetList = document.querySelector("#planets");

let btnNextPlanets;
let btnPreviousPlanets;
let urlPeople = "https://swapi.dev/api/planets/?page=1";
const PATH_PARAMS = "people/";
const BASE_URL = "https://swapi.dev/api/";

function itemPeople(info) {
  console.log(info);
  const infoJson = JSON.parse(info);
  document.getElementById('titleSelec').innerHTML = infoJson.name
}

function fetchPeople(url) {
  setTimeout(() => {
    
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log("Data basement: ", data);
      DataPeople(data.results);
      
      btnNextPlanets = data.next
      ? `<button class="btn" data-url=${data.next}>⏩</button>`
      : "";
      btnPreviousPlanets = data.previous
      ? `<button class="btn" data-url=${data.previous}>⏮</button>`
      : "";
      buttons.innerHTML = btnPreviousPlanets + " " + btnNextPlanets;
    })
    .catch((error) => {
      console.error(error);
    });
  }, 800);
}
fetchPeople(urlPeople);

const DataPeople = async (data) => {
  planetList.innerHTML = "";
  try {
      
      for (let index of data) {
        const resp = await fetch(index.url);
        const resul = await resp.json();
        let templateHtml = `
        <div class="ppl-item" id="Anim_tion">
        <div>
        <img src="https://i.postimg.cc/m298VQd5/Recurso-5.png" alt="img not found">
        </div>
        <h2>${resul.name}</h2>
        <button onclick='itemPlanets(${JSON.stringify(JSON.stringify(resul))})'>Click me!</button>
        
        
        </div>
        `;
        planetList.innerHTML += templateHtml;
        // const markup = resul.map(() => {
          
          //     return`
          //     `
          // }).join('');
          //   planetList.insertAdjacentHTML('beforeend', markup);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
buttons.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    let value = e.target.dataset.url;
    // console.log(value)
    fetchPeople(value);
  }
});
