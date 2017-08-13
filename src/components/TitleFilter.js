import React from 'react';
import PropTypes from 'prop-types';

import {changeTitleFilter} from '../actions';

const TitleFilter = props => {
  const {dispatch, value} = props;

  return (
    <div className='pb-3'>
      <input id='movie-filter-input'
             className='form-control'
             placeholder='Filter by title'
             type='text'
             value={value}
             onChange={e => dispatch(changeTitleFilter(e.target.value))} />
    </div>
  );
};

TitleFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TitleFilter;
