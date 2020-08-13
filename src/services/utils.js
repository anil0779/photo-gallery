import Photos from './../mocks/photos';


const API_URL = 'https://api.unsplash.com/';
const client_id = '8imRf6psEuTlvY6MtBvcBdQBxkpa80zyS_wOP4Vw_Y4'; // access_key

export async function  getPhotos() {
    // fetch(API_URL + 'photos')
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         debugger;
    //     })
    return Photos;
}