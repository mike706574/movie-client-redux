import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const PageLink = props => {
  const {label,
         disabled = false,
         active = false} = props,
        className = 'page-item' +
          (disabled ? ' disabled' : ' enabled') +
          (active ? ' active' : ' inactive'),
        style = active ? {} : {cursor: 'pointer',
                               color: '#0275d8'},
        onClick = disabled ? noop : props.onClick;

  return (
    <li className={className}
        key={label}>
      <a className="page-link"
         onClick={onClick}
         style={style}>
      {label}</a>
    </li>
  );
};

PageLink.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string,
                              PropTypes.number])
    .isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

export default PageLink;
