import React from 'react';
import PropTypes from 'prop-types';
import PreviousLink from './PreviousLink';
import PageLink from './PreviousLink';
import NextLink from './NextLink';

const alphabet = 'ABCDEFGHIJKLMNOQRSTUVWXYZ';

const AlphabetNavigation = props => {
  return (
    <ul className='pagination'>
      <PreviousLink onClick={identity}></PreviousLink>
      <PageLink></PageLink>
      <PageLink active={true}></PageLink>
      <PageLink></PageLink>
      <NextLink onClick={identity}></NextLink>
    </ul>
  );
};

PreviousLink.propTypes = {

};

export default PreviousLink;
