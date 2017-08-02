import React from 'react';
import PropTypes from 'prop-types';

import {previousPage, nextPage, toPage} from '../actions';
import PreviousLink from './PreviousLink';
import PageLink from './PageLink';
import NextLink from './NextLink';

const Pagination = ({dispatch, pageNumber, pageCount, itemCount}) => {
  const links = Array(pageCount).fill().map((_, i) => {
    const linkPageNumber = i + 1;
    return (
      <PageLink key={linkPageNumber}
                label={linkPageNumber}
                onClick={e => dispatch(toPage(linkPageNumber))}
                active={linkPageNumber === pageNumber} />
    );
  });

  return (
    <ul className='pagination'>
      <PreviousLink onClick={e => dispatch(previousPage())}
                    disabled={pageNumber === 1} />
      {links}
      <NextLink onClick={e => dispatch(nextPage())}
                disabled={pageNumber === pageCount}></NextLink>
    </ul>
  );
};

Pagination.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired
};

export default Pagination;
