import React from 'react';
import classNames from 'classnames';
import './style.scss';

const Button = (props) => {

  const buttonStyles = classNames({
    "button": true,
    "primary": true,
    "layout": true
  })

  return(
      <button className={buttonStyles}>
        {props.name}
      </button>
  );
};

export default Button
