import Photos from './../mocks/photos';


const API_URL = 'https://api.unsplash.com/';
const client_id = '8imRf6psEuTlvY6MtBvcBdQBxkpa80zyS_wOP4Vw_Y4'; // access_key

export async function getPhotos(keyword) {
    const url = API_URL +
        (keyword ?
        `search/photos?query=${keyword}&client_id=${client_id}`
        :
        `photos?client_id=${client_id}`);

    return fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            return data;
        }).catch((e) => {
            alert('Something went wrong');
            return Photos; // fallback to mock json
        })

}