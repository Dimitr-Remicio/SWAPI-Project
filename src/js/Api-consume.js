// const BASE_URL = 'https://swapi.dev/api/';

// async function fetchWithErrorHandling(url = '', config = {}) {
//     const response = await fetch(url, config);
//     return response.ok
//         ? await response.json()
//         : Promise.reject(new Error('Not found'));
// }

// export function fetchPeople(page="1", data) {
//     const PATH_PARAMS = 'people/';
//     console.log(`${BASE_URL}${PATH_PARAMS}?page=${page}`);

//     fetch(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
//         .then(response => response.json())
//         .then(data => console.log(data.results));
    
//     // // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
//     // //     .then(response => response.json())
//     // return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
// }
// export function fetchPlanet(page="1") {
//     const PATH_PARAMS = 'planets/';

//     // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
//     //     .then(response => response.json())
    
//     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
//     // console.log()
// }
// export function fetchStarships(page="1") {
//     const PATH_PARAMS = 'starships/';
    
//     // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
//     //     .then(response => response.json())
    
//     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}?page=${page}`)
//     // console.log(fetchWithErrorHandling)
// }

// // export function fetchMovieDetails(movie_id) {
// //     const PATH_PARAMS = '/movie/';
// //     const searchParams = '&language=en-US';

// //     // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
// //     //     .then(response => response.json())
    
// //     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
// // }

// // export function fetchMovieCredits(movie_id) {
// //     const PATH_PARAMS = '/movie/';
// //     const searchParams = '&language=en-US';

// //     // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
// //     //     .then(response => response.json())
    
// //     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
// // }

// // export function fetchMovieReviews(movie_id, page = "1") {
// //     const PATH_PARAMS = '/movie/';
// //     const searchParams = '&language=en-US';

// //     // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
// //     //     .then(response => response.json())
    
// //     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
// // }
// // export function fetchMovieTrailer(movie_id, page = "1") {
// //     const PATH_PARAMS = '/movie/';
// //     const searchParams = '&language=en-US';

// //     // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
// //     //     .then(response => response.json())
    
// //     return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/videos${API_KEY}${searchParams}`)
// // }