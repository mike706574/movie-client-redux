export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

// Error
export const setError = error => ({type: SET_ERROR, error: error});
export const resetError = error => ({type: SET_ERROR, error: error});

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

// Filter
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = value => ({type: CHANGE_FILTER, value: value});
