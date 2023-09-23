const sendfnc = document.getElementById("buttonSearch");
const itemFilter = document.querySelectorAll(".itemFilter");


const searchInput = document.getElementById("search");

const svgOpenFilter = document.getElementById("svgOpenFilter");
const spanFilter = document.getElementById("spanFilter");
// let statecont = document.getElementById("statedetail");
let itemrender = document.getElementById("contentSelec");

const baseUrl = "https://swapi.dev/api";

let optionSelect = "";


const searchFunction = async () => {
  try {
    let selectValue = document.getElementById("filter").value;
    // let optionChanged = selectValue.toLowerCase();
    // console.log(optionSelects);
    console.log(selectValue.toLowerCase());

    const response = await fetch(
      `${baseUrl}/${selectValue.toLowerCase()}/?search=${searchInput.value}`
    );

    const data = await response.json();
    const resul = data.results;

    // console.log(dati)
    renderSearchItem(selectValue, resul);
  } catch (error) {
    console.log(error);
  }
};

itemFilter.forEach((item) =>
  item.addEventListener("click", (e) => {
    optionSelect = e.srcElement.innerText;
    spanFilter.textContent = optionSelect;
  })
);

sendfnc.addEventListener("click", (event) => {
  event.preventDefault();
  let stateaClick = document.getElementById("statedetail");
  searchFunction();

  stateaClick.classList.add("open-details");
  stateaClick.classList.add("show");
  stateaClick.classList.remove("hidde");
});
function renderSearchItem(type, resul) {
  // itemrender.innerHTML += peopleItem;

  // console.log(info);
    switch (type.toLowerCase()) {
      case "people":
        console.log(resul);
        itemrender.innerHTML = "";

        let peopleItem = resul
          .map(
            ({
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
              homeworld,
              created,
              edited,
              url
            }) => {
              return `<div class="detailItem">
               <h2>${name}</h2>
            <ul>
            <li class="info-item">
            <h3>Height</h3>
            <p>${height}</p>
            </li>
            <li class="info-item">
            <h3>mass</h3>
            <p>${mass}</p>
            </li>
            <li class="info-item">
            <h3>hair_color</h3>
            <p>${hair_color}</p>
            </li>
            <li class="info-item">
            <h3>skin_color</h3>
            <p>${skin_color}</p>
            </li>
            <li class="info-item">
            <h3>eye_color</h3>
            <p>${eye_color}</p>
            </li>
            <li class="info-item">
            <h3>birth_year</h3>
            <p>${birth_year}</p>
            </li>
            <li class="info-item">
            <h3>gender</h3>
            <p>${gender}</p>
            </li>
            </ul>
            <button>${homeworld}</button>
            <div class="otherinfo">
              <h4>Films</h4>
            </div>
            <div class="otherinfo">
              <h4>Species</h4>
            </div>
            <div class="otherinfo">
              <h4>Vehicles</h4>
            </div>
            <div class="otherinfo">
              <h4>Starships</h4>
            </div>
            <p>${created}</p>
            <p>${edited}</p>
            <a href="${url}" target="_blank">link</a>
            </div>`;
            }
          )
          .join("");
        itemrender.insertAdjacentHTML("beforeend", peopleItem);

        break;
      case "films":
        itemrender.innerHTML = "";
        let filmsItem = resul
        .map(
          ({
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
            characters,
            created,
            edited,
            url
          }) => {
            return `<div class="detailItem">
            <h6>${episode_id}</h6>
            <h2>${title}</h2>
         <ul>
         <li class="info-item">
         <h3>opening_crawl</h3>
         <p>${opening_crawl}</p>
         </li>
         <li class="info-item">
         <h3>director</h3>
         <p>${director}</p>
         </li>
         <li class="info-item">
         <h3>producer</h3>
         <p>${producer}</p>
         </li>
         <li class="info-item">
         <h3>release_date</h3>
         <p>${release_date}</p>
         </li>
         <li class="info-item">
         <h3>characters</h3>
         <p>${characters}</p>
         </li>
         <div class="otherinfo">
           <h4>Films</h4>
         </div>
         <div class="otherinfo">
           <h4>Species</h4>
         </div>
         <div class="otherinfo">
           <h4>Vehicles</h4>
         </div>
         <div class="otherinfo">
           <h4>Starships</h4>
         </div>
         <p>${created}</p>
         <p>${edited}</p>
         <a href="${url}" target="_blank">link</a>
         </div>`;
          }
        )
        .join("");
      itemrender.insertAdjacentHTML("beforeend", filmsItem);
        break;
      case "planets":
        itemrender.innerHTML = "";
        let planetsitem = resul
          .map(
            ({
              name,
              rotation_period,
              orbital_period,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water,
              population,
              residents,
              created,
              edited,
              url
            }) => {
              return `<div class="detailItem">
               <h2>${name}</h2>
            <ul>
            <li class="info-item">
            <h3>Rotation</h3>
            <p>${rotation_period}</p>
            </li>
            <li class="info-item">
            <h3>Orbital</h3>
            <p>${orbital_period}</p>
            </li>
            <li class="info-item">
            <h3>Diameter</h3>
            <p>${diameter}</p>
            </li>
            <li class="info-item">
            <h3>Climate</h3>
            <p>${climate}</p>
            </li>
            <li class="info-item">
            <h3>Gravity</h3>
            <p>${gravity}</p>
            </li>
            <li class="info-item">
            <h3>Terrain</h3>
            <p>${terrain}</p>
            </li>
            <li class="info-item">
            <h3>Surface Water</h3>
            <p>${surface_water}</p>
            </li>
            <li class="info-item">
            <h3>Population</h3>
            <p>${population}</p>
            </li>
            <li class="info-item">
            <h3>Residents</h3>
            <p>${residents}</p>
            </li>
            </ul>
            <div class="otherinfo">
              <h4>Films</h4>
            </div>
            <div class="otherinfo">
              <h4>Species</h4>
            </div>
            <div class="otherinfo">
              <h4>Vehicles</h4>
            </div>
            <div class="otherinfo">
              <h4>Starships</h4>
            </div>
            <p>${created}</p>
            <p>${edited}</p>
            <a href="${url}" target="_blank">link</a>
            </div>`;
            }
          )
          .join("");
        itemrender.insertAdjacentHTML("beforeend", planetsitem);
      break;
      case "starships":
        itemrender.innerHTML = "";
        console.log(resul)
        let starshipsItem = resul
          .map(
            ({
              name,
              model,
              manufacturer,
              cost_in_credits,
              length,
              max_atmosphering_speed,
              crew,
              passengers,
              cargo_capacity,
              consumables,
              hyperdrive_rating,
              MGLT,
              starship_class,
              created,
              edited,
              url
            }) => {
              return `<div class="detailItem">
               <h2>${name}</h2>
            <ul>
            <li class="info-item">
            <h3>model</h3>
            <p>${model}</p>
            </li>
            <li class="info-item">
            <h3>manufacturer</h3>
            <p>${manufacturer}</p>
            </li>
            <li class="info-item">
            <h3>Cost</h3>
            <p>${cost_in_credits}</p>
            </li>
            <li class="info-item">
            <h3>length</h3>
            <p>${length}</p>
            </li>
            <li class="info-item">
            <h3>Max Atmosphering Speed</h3>
            <p>${max_atmosphering_speed}</p>
            </li>
            <li class="info-item">
            <h3>Crew</h3>
            <p>${crew}</p>
            </li>
            <li class="info-item">
            <h3>Passengers</h3>
            <p>${passengers}</p>
            </li>
            <li class="info-item">
            <h3>Cargo_capacity</h3>
            <p>${cargo_capacity}</p>
            </li>
            <li class="info-item">
            <h3>consumables</h3>
            <p>${consumables}</p>
            </li>
            <li class="info-item">
            <h3>hyperdrive_rating</h3>
            <p>${hyperdrive_rating}</p>
            </li>
            <li class="info-item">
            <h3>MGLT</h3>
            <p>${MGLT}</p>
            </li>
            <li class="info-item">
            <h3>starship_class</h3>
            <p>${starship_class}</p>
            </li>
            </ul>
            <div class="otherinfo">
              <h4>pilots</h4>
            </div>
            <div class="otherinfo">
              <h4>Films</h4>
            </div>
            <p>${created}</p>
            <p>${edited}</p>
            <a href="${url}" target="_blank">link</a>
            </div>`;
            }
          )
          .join("");
        itemrender.insertAdjacentHTML("beforeend", starshipsItem);
        break;
      case "species":
        itemrender.innerHTML = "";
        console.log(resul)
        let speciesItem = resul
          .map(
            ({
              name,
              classification,
              designation,
              average_height,
              skin_colors,
              hair_colors,
              eye_colors,
              average_lifespan,
              homeworld,
              language,
              // people,
              // films,
              created,
              edited,
              url
            }) => {
              return `<div class="detailItem">
               <h2>${name}</h2>
            <ul>
            <li class="info-item">
            <h3>classification</h3>
            <p>${classification}</p>
            </li>
            <li class="info-item">
            <h3>designation</h3>
            <p>${designation}</p>
            </li>
            <li class="info-item">
            <h3>Average_height</h3>
            <p>${average_height}</p>
            </li>
            <li class="info-item">
            <h3>Skin_colors</h3>
            <p>${skin_colors}</p>
            </li>
            <li class="info-item">
            <h3>Hair_colors</h3>
            <p>${hair_colors}</p>
            </li>
            <li class="info-item">
            <h3>Eye_colors</h3>
            <p>${eye_colors}</p>
            </li>
            <li class="info-item">
            <h3>Average lifespan</h3>
            <p>${average_lifespan}</p>
            </li>
            <li class="info-item">
            <h3>homeworld</h3>
            <p>${homeworld}</p>
            </li>
            <li class="info-item">
            <h3>Language</h3>
            <p>${language}</p>
            </li>
            </ul>
            <div class="otherinfo">
              <h4>Films</h4>
            </div>
            <div class="otherinfo">
              <h4>people</h4>
            </div>
            
            <p>${created}</p>
            <p>${edited}</p>
            <a href="${url}" target="_blank">link</a>
            </div>`;
            }
          )
          .join("");
        itemrender.insertAdjacentHTML("beforeend", speciesItem);
        break;
      case "vehicles":
        itemrender.innerHTML = "";
        console.log(resul)
        let vehiclesItem = resul
          .map(
            ({
              name,
              model,
              manufacturer,
              cost_in_credits,
              length,
              max_atmosphering_speed,
              crew,
              passengers,
              cargo_capacity,
              consumables,
              vehicle_class,
              // films,
              // pilots,
              created,
              edited,
              url
            }) => {
              return `<div class="detailItem">
               <h2>${name}</h2>
            <ul>
            <li class="info-item">
            <h3>model</h3>
            <p>${model}</p>
            </li>
            <li class="info-item">
            <h3>manufacturer</h3>
            <p>${manufacturer}</p>
            </li>
            <li class="info-item">
            <h3>cost_in_credits</h3>
            <p>${cost_in_credits}</p>
            </li>
            <li class="info-item">
            <h3>length</h3>
            <p>${length}</p>
            </li>
            <li class="info-item">
            <h3>max_atmosphering_speed</h3>
            <p>${max_atmosphering_speed}</p>
            </li>
            <li class="info-item">
            <h3>crew</h3>
            <p>${crew}</p>
            </li>
            <li class="info-item">
            <h3>passengers</h3>
            <p>${passengers}</p>
            </li>
            <li class="info-item">
            <h3>cargo_capacity</h3>
            <p>${cargo_capacity}</p>
            </li>
            <li class="info-item">
            <h3>consumables</h3>
            <p>${consumables}</p>
            </li>
            <li class="info-item">
            <h3>vehicle_class</h3>
            <p>${vehicle_class}</p>
            </li>
            </ul>
            <div class="otherinfo">
              <h4>Films</h4>
            </div>
            <div class="otherinfo">
              <h4>pilots</h4>
            </div>
            <p>${created}</p>
            <p>${edited}</p>
            <a href="${url}" target="_blank">link</a>
            </div>`;
            }
          )
          .join("");
        itemrender.insertAdjacentHTML("beforeend", vehiclesItem);
        break;
    }
}

function HiddeItem() {
  // let buttons = document.querySelectorAll("#detailbtn");
  destroyItem();

  let statecont = document.getElementById("statedetail");

  statecont.classList.remove("open-details");
  statecont.classList.add("hidde");
  statecont.classList.remove("show");
}

function destroyItem() {
  document.getElementById("contentSelec").innerHTML = "";
}
