import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const PreviousLink = props => {
  let disabled = props.disabled,
      onClick = disabled ? noop : props.onClick,
      style = disabled ? {} : {cursor: 'pointer',
                               color: '#0275d8'};
  return (
    <li key='previous'
        className={'page-item ' + disabled ? 'disabled' : 'enabled'}>
      <a className="page-link"
         onClick={onClick}
         style={style}>
        <span aria-hidden>«</span>
        <span className='sr-only'>Previous</span>
      </a>
    </li>
  );
};

PreviousLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default PreviousLink;
