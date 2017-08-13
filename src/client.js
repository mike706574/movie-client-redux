import fetch from 'isomorphic-fetch';

const apiUrl = "http://localhost:8001";

export function getMovies() {
  let url = `${apiUrl}/api/movies`;
  return fetch(url, {method: 'GET',
                     headers: new Headers({'Accept': 'application/json'})})
    .then(response => {
      if(response.ok) {
        return new Promise((resolve) => {
          resolve(response.json());
        });
      }
      else {
        return new Promise((resolve, reject) => {
          reject(response);
        });
      }
    });
}

function updateWatcher(movieId, username, patchType) {
  let url = `${apiUrl}/api/movies/${movieId}`;
  return fetch(url, {method: 'PATCH',
                     body: JSON.stringify({'patch-type': patchType,
                                           'id': movieId,
                                           'username': username}),
                     headers: new Headers({'Accept': 'application/json',
                                           'Content-Type': 'application/json'})})
    .then(response => {
      if(response.ok) {
        return new Promise((resolve) => {
          resolve(response.json());
        });
      }
      else {
        return new Promise((resolve, reject) => {
          reject(response);
        });
      }
    });
}

export function setWatched(movieId, username) {
  return updateWatcher(movieId, username, 'watched');
}

export function setUnwatched(movieId, username) {
  return updateWatcher(movieId, username, 'unwatched');
}
