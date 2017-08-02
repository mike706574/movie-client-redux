import {
  PREVIOUS_LETTER,
  NEXT_LETTER,
  TO_LETTER,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  TO_PAGE,
  CHANGE_FILTER,
  SET_ERROR,
  RESET_ERROR
} from '../actions';

import {getPreviousLetter, getNextLetter} from '../alphabet';

const movies = [{title: 'Apple',
                 releaseDate: 'May 25, 2006',
                 tmdbId: '1',
                 imdbId: 't1'},
                {title: 'Anesthesiologist',
                 releaseDate: 'April 2, 1994',
                 tmdbId: '2',
                 imdbId: 't2'},
                {title: 'Abuse',
                 releaseDate: 'January 31, 1972',
                 tmdbId: '3',
                 imdbId: 't3'}];

export const initialState = {letter: 'A',
                             pageNumber: 1,
                             movies: movies,
                             filterText: '',
                             error: null};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case PREVIOUS_LETTER:
    return {...state, letter: getPreviousLetter(state.letter)};
  case NEXT_LETTER:
    return {...state, letter: getNextLetter(state.letter)};
  case TO_LETTER:
    return {...state, letter: action.letter};

  case PREVIOUS_PAGE:
    return {...state, pageNumber: state.pageNumber - 1};
  case NEXT_PAGE:
    return {...state, pageNumber: state.pageNumber + 1};
  case TO_PAGE:
    return {...state, pageNumber: action.page};

  case CHANGE_FILTER:
    return {...state, filterText: action.value};

  case SET_ERROR:
    return {...state, error: action.error};
  case RESET_ERROR:
    return {...state, error: null};
  default:
    return state;
  }
};

export default rootReducer;
