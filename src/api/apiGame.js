import client from '@/services/client';
const path = 'api/games/';

export function initNewGame(data){
    client.post(path, data)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      // catch error
      console.log(err);
    })
}

export function addNewGuesses(id, data){
    client.post(`path${id}/guesses/`, data)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      // catch error
      console.log(err);
      return err;
    })
}

export function getGame(id){
    const url = id != null ? `${path}${id}/`: path
    client.get(url)
    .then(response => {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(err => {
      // catch error
      console.log(err);
    })
}
