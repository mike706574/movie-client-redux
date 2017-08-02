export const getPreviousLetter = letter => {
  if(letter === 'A') {
    return 'Z';
  }
  return String.fromCharCode(letter.charCodeAt(0) - 1);
};

export const getNextLetter = letter => {
  if(letter === 'Z') {
    return 'A';
  }
  return String.fromCharCode(letter.charCodeAt(0) + 1);
};
