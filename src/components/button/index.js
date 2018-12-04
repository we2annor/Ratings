import React from 'react';
import './style.scss';

const Button = (props) => {
  return(
    <button className="button primary">
      {props.name}
    </button>
  )
}

export default Button
