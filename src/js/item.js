const state = document.getElementById("statedetail");
const render = document.getElementById("contentSelec");

function itemPeople(info) {
  let buttons = document.querySelectorAll("#detailbtn");

  const infoJson = JSON.parse(info);

  state.classList.add("open-details");
  state.classList.remove("hidde");
  state.classList.add("show");

  // let options = infoJson.films;
  // let options2 = infoJson.species;
  // let options3 = infoJson.vehicles;
  // let options4 = infoJson.starships;
  render.innerHTML = "";

  let peopleItem = `
  <div class="cntnertitle">
              <h1 id="titleSelec">Details People</h1>
            </div>
            <div class="detailItem">
           <h2>${infoJson.name}</h2>
        <ul>
        <li class="info-item">
        <h3>Height</h3>
        <p>${infoJson.height}</p>
        </li>
        <li class="info-item">
        <h3>mass</h3>
        <p>${infoJson.mass}</p>
        </li>
        <li class="info-item">
        <h3>hair_color</h3>
        <p>${infoJson.hair_color}</p>
        </li>
        <li class="info-item">
        <h3>skin_color</h3>
        <p>${infoJson.skin_color}</p>
        </li>
        <li class="info-item">
        <h3>eye_color</h3>
        <p>${infoJson.eye_color}</p>
        </li>
        <li class="info-item">
        <h3>birth_year</h3>
        <p>${infoJson.birth_year}</p>
        </li>
        <li class="info-item">
        <h3>gender</h3>
        <p>${infoJson.gender}</p>
        </li>
        </ul>
        <div class="otherinfo">
          <h4>homeworld</h4>  
          <button onclick='getInfo(${JSON.stringify(
            infoJson.homeworld
          )})'>Open</button>
        </div>
        <div class="otherinfo">
          <h4 >Films</h4>
          ${infoJson.films.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
        <div class="otherinfo">
          <h4>Species</h4>
          ${infoJson.species.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
        <div class="otherinfo">
        <h4>Vehicles</h4>
        ${infoJson.vehicles.map(
          (element) =>
            `<button id="modalOp" onclick='getInfo(${JSON.stringify(
              element
            )})'>Open</button>`
        )}
        </div>
        <div class="otherinfo">
          <h4>Starships</h4>
          ${infoJson.starships.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
        <p>${infoJson.created}</p>
        <p>${infoJson.edited}</p>
        </div>`;
  render.insertAdjacentHTML("beforeend", peopleItem);
}

function itemPlanets(info) {
  let buttons = document.querySelectorAll("#detailbtn");

  const infoPlanet = JSON.parse(info);

  state.classList.add("open-details");
  state.classList.remove("hidde");
  state.classList.add("show");

  render.innerHTML = "";
  console.log(infoPlanet);
  let planetsitem = `
  <div class="cntnertitle">
              <h1 id="titleSelec">Details Planets</h1>
            </div>
            <div class="detailItem">
         <h2>${infoPlanet.name}</h2>
      <ul>
      <li class="info-item">
      <h3>Rotation</h3>
      <p>${infoPlanet.rotation_period}</p>
      </li>
      <li class="info-item">
      <h3>Orbital</h3>
      <p>${infoPlanet.orbital_period}</p>
      </li>
      <li class="info-item">
      <h3>Diameter</h3>
      <p>${infoPlanet.diameter}</p>
      </li>
      <li class="info-item">
      <h3>Climate</h3>
      <p>${infoPlanet.climate}</p>
      </li>
      <li class="info-item">
      <h3>Gravity</h3>
      <p>${infoPlanet.gravity}</p>
      </li>
      <li class="info-item">
      <h3>Terrain</h3>
      <p>${infoPlanet.terrain}</p>
      </li>
      <li class="info-item">
      <h3>Surface Water</h3>
      <p>${infoPlanet.surface_water}</p>
      </li>
      <li class="info-item">
      <h3>Population</h3>
      <p>${infoPlanet.population}</p>
      </li>
      <li class="info-item">
      <h3>Residents</h3>
      <p>${infoPlanet.residents}</p>
      </li>
      </ul>
      <div class="otherinfo">
          <h4>homeworld</h4>  
          <button onclick='getInfo(${JSON.stringify(
            infoPlanet.homeworld
          )})'>Open</button>
        </div>
        <div class="otherinfo">
          <h4>Films</h4>
          ${infoPlanet.films.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
       
      <p>${infoPlanet.created}</p>
      <p>${infoPlanet.edited}</p>
      <a href="${infoPlanet.url}" target="_blank">link</a>
      </div>`;
  render.insertAdjacentHTML("beforeend", planetsitem);
}
function itemStarShips(info) {
  let buttons = document.querySelectorAll("#detailbtn");

  const infoships = JSON.parse(info);

  state.classList.add("open-details");
  state.classList.remove("hidde");
  state.classList.add("show");

  render.innerHTML = "";
  console.log(infoships);
  let starshipsItem = `
  <div class="cntnertitle">
              <h1 id="titleSelec">Details StarShips</h1>
            </div>
  <div class="detailItem">
         <h2>${infoships.name}</h2>
      <ul>
      <li class="info-item">
      <h3>model</h3>
      <p>${infoships.model}</p>
      </li>
      <li class="info-item">
      <h3>manufacturer</h3>
      <p>${infoships.manufacturer}</p>
      </li>
      <li class="info-item">
      <h3>Cost</h3>
      <p>${infoships.cost_in_credits}</p>
      </li>
      <li class="info-item">
      <h3>length</h3>
      <p>${infoships.length}</p>
      </li>
      <li class="info-item">
      <h3>Max Atmosphering Speed</h3>
      <p>${infoships.max_atmosphering_speed}</p>
      </li>
      <li class="info-item">
      <h3>Crew</h3>
      <p>${infoships.crew}</p>
      </li>
      <li class="info-item">
      <h3>Passengers</h3>
      <p>${infoships.passengers}</p>
      </li>
      <li class="info-item">
      <h3>Cargo_capacity</h3>
      <p>${infoships.cargo_capacity}</p>
      </li>
      <li class="info-item">
      <h3>consumables</h3>
      <p>${infoships.consumables}</p>
      </li>
      <li class="info-item">
      <h3>hyperdrive_rating</h3>
      <p>${infoships.hyperdrive_rating}</p>
      </li>
      <li class="info-item">
      <h3>MGLT</h3>
      <p>${infoships.MGLT}</p>
      </li>
      <li class="info-item">
      <h3>starship_class</h3>
      <p>${infoships.starship_class}</p>
      </li>
      </ul>
        <div class="otherinfo">
          <h4>Films</h4>
          ${infoships.films.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
        <div class="otherinfo">
          <h4>pilots</h4>
          ${infoships.pilots.map(
            (element) =>
              `<button id="modalOp" onclick='getInfo(${JSON.stringify(
                element
              )})'>Open</button>`
          )}
        </div>
      <p>${infoships.created}</p>
      <p>${infoships.edited}</p>
      <a href="${infoships.url}" target="_blank">link</a>
      </div>`;
  render.insertAdjacentHTML("beforeend", starshipsItem);
}
function HiddeItem() {
  let buttons = document.querySelectorAll("#detailbtn");

  state.classList.remove("open-details");
  state.classList.add("hidde");
  state.classList.remove("show");
}
