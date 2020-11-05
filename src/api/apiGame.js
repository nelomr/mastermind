import client from '@/services/client';
const path = 'api/games/';

export function initNewGame(data){
  return  client.post(path, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
}

export function addNewGuesses(id, data){
   return client.post(`${path}${id}/guesses/`, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    })
}

export function getGame(id){
    const url = id != null ? `${path}${id}/`: path
   return client.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
}
