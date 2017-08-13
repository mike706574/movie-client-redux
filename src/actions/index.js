import * as client from '../client';

export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

// Error
export const setError = error => ({type: SET_ERROR, error: error});
export const resetError = error => ({type: SET_ERROR, error: error});

// Fetch
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const fetchMovies = () => (dispatch, getState) => {
  client.getMovies()
    .then(response => {
      if(response.status === 'ok') {
        dispatch(receiveMovies(response.movies));
      }
      else {
        dispatch(setError(response));
      }
    })
    .catch(error => dispatch(setError(error)));
};

export const receiveMovies = (movies) => ({type: RECEIVE_MOVIES,
                                           movies: movies});

// Watched
export const SEND_WATCHED = 'SEND_WATCHED';
export const SEND_UNWATCHED = 'SEND_UNWATCHED';

export const RECEIVE_WATCHED = 'RECEIVE_WATCHED';
export const RECEIVE_UNWATCHED = 'RECEIVE_UNWATCHED';

export const receiveWatched = (movieId, username) => ({type: RECEIVE_WATCHED,
                                                       movieId: movieId,
                                                       username: username});
export const receiveUnwatched = (movieId, username) => ({type: RECEIVE_UNWATCHED,
                                                         movieId: movieId,
                                                         username: username});


export const sendWatched = (movieId, username) => (dispatch, getState) => {
  client.setWatched(movieId, username)
    .then(body => dispatch(receiveWatched(movieId, username)))
    .catch(error => dispatch(setError(error)));
}

export const sendUnwatched = (movieId, username) => (dispatch, getState) => {
  client.setUnwatched(movieId, username)
    .then(body => dispatch(receiveUnwatched(movieId, username)))
    .catch(error => dispatch(setError(error)));
}

// Alphabet
export const NEXT_LETTER = 'NEXT_LETTER';
export const PREVIOUS_LETTER = 'PREVIOUS_LETTER';
export const TO_LETTER = 'TO_LETTER';

export const nextLetter = () => ({type: NEXT_LETTER});
export const previousLetter = () => ({type: PREVIOUS_LETTER});
export const toLetter = letter => ({type: TO_LETTER, letter: letter});

// Pages
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const TO_PAGE = 'TO_PAGE';

export const nextPage = () => ({type: NEXT_PAGE});
export const previousPage = () => ({type: PREVIOUS_PAGE});
export const toPage = page => ({type: TO_PAGE, page: page});

// Title Filter
export const CHANGE_TITLE_FILTER = 'CHANGE_TITLE_FILTER';

export const changeTitleFilter = value => ({type: CHANGE_TITLE_FILTER, value: value});

// User Filter
export const CHANGE_USER_FILTER = 'CHANGE_USER_FILTER';

export const changeUserFilter = (user, value) => ({type: CHANGE_USER_FILTER,
                                                   user: user,
                                                   value: value});
