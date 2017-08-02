import React from 'react';
import PropTypes from 'prop-types';

import {previousLetter, nextLetter, toLetter} from '../actions';
import {getPreviousLetter, getNextLetter} from '../alphabet';
import PreviousLink from './PreviousLink';
import PageLink from './PageLink';
import NextLink from './NextLink';

const AlphabetNavigation = ({dispatch, letter}) => {
  const backOne = getPreviousLetter(letter),
        backTwo = getPreviousLetter(backOne),
        forwardOne = getNextLetter(letter),
        forwardTwo = getNextLetter(forwardOne);
  return (
    <ul className='pagination'>
      <PreviousLink onClick={e => dispatch(previousLetter())} />
      <PageLink label={backTwo}
                onClick={e => dispatch(toLetter(backTwo))} />
      <PageLink label={backOne} onClick={e => dispatch(toLetter(backOne))} />
      <PageLink label={letter}
                onClick={e => {}}
                active={true} />
      <PageLink label={forwardOne}
                onClick={e => dispatch(toLetter(forwardOne))} />
      <PageLink label={forwardTwo}
                onClick={e => dispatch(toLetter(forwardTwo))} />
      <NextLink onClick={e => dispatch(nextLetter())} />
    </ul>
  );
};

AlphabetNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired
};

export default AlphabetNavigation;
