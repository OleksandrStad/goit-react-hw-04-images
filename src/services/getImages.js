const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '33646026-f313f2ff5deeed9e46eba7e22';

// export const getImages = (nameSearch) => {
//     return fetch(`${BASE_URL}/?key=${API_KEY}&q=${nameSearch}&per_page=12`)

// }


export function getImages(nameSearch, page) {
    return fetch(`${BASE_URL}/?key=${API_KEY}&q=${nameSearch}&per_page=12&page=${page}`)
}