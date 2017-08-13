import React from 'react';
import PropTypes from 'prop-types';

import {changeUserFilter} from '../actions';

const UserSelect = props => {
  const {label, user, value, dispatch} = props;

  return (
    <div className='form-group pr-2'>
      <label className='pr-2'>{label}</label>
      <select className='form-control'
              value={value}
              onChange={event => dispatch(changeUserFilter(user, event.target.value))}>
        <option value='either'>Either</option>
        <option value='unwatched'>Unwatched</option>
        <option value='watched'>Watched</option>
      </select>
    </div>
  );
};

const UserFilter = props => {
  const {dispatch, userFilters} = props;

  return (
    <div className='pb-3'>
      <form className='form-inline'>
        <UserSelect dispatch={dispatch}
                    user='mike'
                    value={userFilters.mike}
                    label='Mike'></UserSelect>
        <UserSelect dispatch={dispatch}
                    user='abby'
                    value={userFilters.abby}
                    label='Abby'></UserSelect>
      </form>
    </div>
  );
};

UserFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userFilters: PropTypes.object.isRequired
};

export default UserFilter;
