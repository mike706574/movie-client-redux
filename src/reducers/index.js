import {
  RECEIVE_MOVIES,
  PREVIOUS_LETTER,
  NEXT_LETTER,
  TO_LETTER,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  TO_PAGE,
  CHANGE_TITLE_FILTER,
  CHANGE_USER_FILTER,
  RECEIVE_WATCHED,
  RECEIVE_UNWATCHED,
  SET_ERROR,
  RESET_ERROR
} from '../actions';

import merge from 'lodash/merge';
import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {getPreviousLetter, getNextLetter} from '../alphabet';

export const initialState = {letter: 'A',
                             pageNumber: 1,
                             fetching: true,
                             movies: [],
                             titleFilterText: '',
                             userFilters: {'mike': 'either',
                                           'abby': 'either'},
                             error: null};

const updateMovie = (movies, id, fn) => {
  return movies.map(movie => {
    if(movie.id === id) {
      return fn(movie);
    }
    return movie;
  });
};

const app = (state = initialState, action) => {
  let movies;

  switch(action.type) {
  case PREVIOUS_LETTER:
    return {...state, letter: getPreviousLetter(state.letter)};
  case NEXT_LETTER:
    return {...state, letter: getNextLetter(state.letter)};
  case TO_LETTER:
    return {...state, letter: action.letter};

  case RECEIVE_MOVIES:
    return {...state, movies: action.movies, fetching: false};

  case RECEIVE_WATCHED:
    movies = updateMovie(state.movies, action.movieId, movie => {
      movie.watched.push(action.username);
      return movie;
    });
    return {...state, movies};

  case RECEIVE_UNWATCHED:
    movies = updateMovie(state.movies, action.movieId, movie => {
      movie.watched = movie.watched.filter(username => username !== action.username);
      return movie;
    });
    return {...state, movies: movies};

  case PREVIOUS_PAGE:
    return {...state, pageNumber: state.pageNumber - 1};
  case NEXT_PAGE:
    return {...state, pageNumber: state.pageNumber + 1};
  case TO_PAGE:
    return {...state, pageNumber: action.page};

  case CHANGE_TITLE_FILTER:
    return {...state, titleFilterText: action.value};

  case CHANGE_USER_FILTER:
    const updatedUserFilter = {};
    updatedUserFilter[action.user] = action.value;
    return {...state,
            userFilters: merge({}, state.userFilters, updatedUserFilter)};

  case SET_ERROR:
    return {...state, fetching: false, errorMessage: action.error.message, error: action.error};
  case RESET_ERROR:
    return {...state, error: null};
  default:
    return state;
  }
};

const rootReducer = combineReducers({app,
                                     routing});

export default rootReducer;
