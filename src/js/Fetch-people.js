// import { result } from "lodash";
const opendetail = document.getElementById('detailsOpen');
const buttons = document.getElementById("buttonpeople");
const peopleList = document.querySelector("#people");
const item = document.querySelector(".details");
const butn = document.getElementById("btnm");


let btnNextPeople;
let btnPreviousPeople;
let urlPeople = "https://swapi.dev/api/people/?page=1";
const PATH_PARAMS = "people/";
const LINK_URL = "https://swapi.dev/api/people/?search=";

function itemPeople(info) {
  console.log(info);
  const infoJson = JSON.parse(info);
  document.getElementById('titleSelec').innerHTML = infoJson.name
}

function fetchPeople(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //   console.log("Data basement: ", data);
      DataPeople(data.results);
    //   DataDetails(data.results);

      btnNextPeople = data.next
        ? `<button class="btn" data-url=${data.next}>></button>`
        : "";
      btnPreviousPeople = data.previous
        ? `<button class="btn" data-url=${data.previous}><</button>`
        : "";
      buttons.innerHTML = btnPreviousPeople + " " + btnNextPeople;
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchPeople(urlPeople);

const DataPeople = async (data) => {
  peopleList.innerHTML = "";
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
                <button id="detailbtn" onclick='itemPeople(${JSON.stringify(JSON.stringify(resul))})'>Click me!</button>

            </div>
            `
            ;
            peopleList.innerHTML += templateHtml;
        }
        
    
  } catch (error) {
    console.log(error);
  }

};



buttons.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    let value = e.target.dataset.url;
    // console.log(value);
    fetchPeople(value);
  }
})
  

