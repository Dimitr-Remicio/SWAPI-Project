const item = document.querySelector(".details");

let url = "https://swapi.dev/api/people/";

// export function fetchItem(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Data basement: ", data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

const BASE_URL = 'https://swapi.dev/api/';

export function fetchPeople(page="1", data) {
    const PATH_PARAMS = 'people/';
    // console.log(`${BASE_URL}${PATH_PARAMS}?page=${page}`);

    fetch(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
        .then(response => response.json())
        .then(data => {
            const markup = data.results.map(({name}) => {

          return`
            <div id="${name}">
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
             <h1>${name}</h1>
            </div>
          `
      }).join('');
        
        item.insertAdjacentHTML('beforeend', markup);
        });
        
    // // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
    // //     .then(response => response.json())
    // return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
}
fetchPeople()