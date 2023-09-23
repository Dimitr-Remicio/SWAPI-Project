// // Get the modal
const modal = document.getElementById("myModal");
const contentModal = document.getElementById("modal-cont");
const span = document.querySelector(".close");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
const open = document.getElementById("modalOp");

function getInfo(url) {
  // let url = open.data;
  // let url2 = open;
  modal.classList.add = "show";
  document.getElementById("myModal").style.display = "block";
  // console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data basement: ", data);
      // DataPeople(data.results);
      filmModal(data);
    })
    .catch((error) => {
      console.error(error);
    });
  // console.log(url2);
}

const filmModal = async (data) => {
  try {
    contentModal.innerHTML = "";
    let item = `
   <div class="modal-description">
   <h1 class="modal__title">${data.title}</h1>
   <ul class="modal__list">
   <li class="modal__especifications">
   <span class="modal__especifications-key">Director:</span>
   <span class="modal__especifications-value">${data.title}</span>
   </li>
   <li class="modal__especifications">
   <span class="modal__especifications-key">Producer:</span>
   <span class="modal__especifications-value">${data.producer}</span>
   </li>
   <li class="modal__especifications">
   <span class="modal__especifications-key">Release Date:</span>
   <span class="modal__especifications-value">${data.release_date}</span>
   </li>
   <li class="modal__especifications">
   <span class="modal__especifications-key">Episode Id:</span>
   <span class="modal__especifications-value">${data.episode_id}</span>
   </li>
   <li class="modal__especifications">
   <span class="modal__especifications-key">Opening crawl:</span>
   <span class="modal__especifications-value modal__especifications--opening_crawl-small">${data.title}</span>
   </li>
   </ul>    
   </div>
   `;
    // contentModal.innerHTML += item;
    contentModal.insertAdjacentHTML("beforeend", item);
  } catch (error) {
    console.log(error);
  }
};

span.addEventListener('click', (e) =>{
  e.preventDefault();
  document.getElementById("myModal").style.display = "none";
  contentModal.innerHTML = "";

})
// open.addEventListener('click', (e) => {
//       e.preventDefault();

//       let url = open.data;
//       let url2 = open.value;

//       console.log(url);
//       console.log(url2);
//     })
