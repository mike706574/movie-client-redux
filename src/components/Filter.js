import React from 'react';
import PropTypes from 'prop-types';

import {changeFilter} from '../actions';

const Filter = props => {
  const {dispatch, value} = props;

  return (
    <div className='pb-3'>
      <input id='movie-filter-input'
             className='form-control'
             type='text'
             value={value}
             onChange={e => dispatch(changeFilter(e.target.value))} />
    </div>
  );
};

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Filter;
