import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const NextLink = props => {
  let disabled = props.disabled,
      onClick = disabled ? noop : props.onClick,
      style = disabled ? {} : {cursor: 'pointer',
                               color: '#0275d8'};
  return (
    <li key='next'
        className={'page-item ' + (disabled ? 'disabled' : 'enabled')}>
      <a className="page-link"
         onClick={onClick}
         style={style}>
        <span className='sr-only'>Next</span>
        <span aria-hidden>»</span>
      </a>
    </li>
  );
};

NextLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default NextLink;
