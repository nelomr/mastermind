import client from '@/services/client';
const path = 'api/games/';

export function initNewGame(data){
  return  client.post(path, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      // catch error
      console.log(error);
      throw error;
    })
}

export function addNewGuesses(id, data){
   return client.post(`path${id}/guesses/`, data)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      // catch error
      console.log(error);
      throw error;
    })
}

export function getGame(id){
    const url = id != null ? `${path}${id}/`: path
   return client.get(url)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // catch error
      console.log(error);
      throw error;
    })
}
