import React from 'react';
import classNames from 'classnames'
import './style.scss';

export const Star= (props) => {

  const classes = classNames('star');

  const defaultStyle = {
    color: '#FFF',
    outlineColor : props.outlineColor || '#979797'
  }

  const activeStyle = {
    color: props.color || '#FFC80A',
    outlineColor : props.color || '#FFC80A'
  }

  const style = (props.active) ? activeStyle : defaultStyle;

    return(
      <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.867 55.867" width={props.width} height={props.height}>
      <path d="M11.287 54.548a.997.997 0 0 1-.985-1.169l3.091-18.018L.302 22.602a1.001 1.001 0 0 1 .555-1.705l18.09-2.629 8.091-16.393a.996.996 0 1 1 1.792 0l8.09 16.393 18.091 2.629a1.002 1.002 0 0 1 .555 1.705L42.475 35.363l3.09 18.017c.064.375-.09.754-.397.978a.993.993 0 0 1-1.054.076l-16.18-8.506-16.182 8.506a1.008 1.008 0 0 1-.465.114zM3.149 22.584l12.016 11.713a1 1 0 0 1 .287.885L12.615 51.72l14.854-7.808a.996.996 0 0 1 .931 0l14.852 7.808-2.836-16.538a1 1 0 0 1 .287-.885l12.016-11.713-16.605-2.413a1 1 0 0 1-.753-.547L27.934 4.578l-7.427 15.047a1 1 0 0 1-.753.547L3.149 22.584z"
      fill={style.outlineColor}
      stroke={style.outlineColor}
      data-id ={props.id}/>
      </svg>
    );
};

export const StarColored = (props) =>{
  return(
    <svg viewBox="0 0 55.867 55.867" width={props.width} height={props.height}>
    <path d="M11.287 54.548a.997.997 0 0 1-.985-1.169l3.091-18.018L.302 22.602a1.001 1.001 0 0 1 .555-1.705l18.09-2.629 8.091-16.393a.996.996 0 1 1 1.792 0l8.09 16.393 18.091 2.629a1.002 1.002 0 0 1 .555 1.705L42.475 35.363l3.09 18.017c.064.375-.09.754-.397.978a.993.993 0 0 1-1.054.076l-16.18-8.506-16.182 8.506a1.008 1.008 0 0 1-.465.114zM3.149 22.584l12.016 11.713a1 1 0 0 1 .287.885L12.615 51.72l14.854-7.808a.996.996 0 0 1 .931 0l14.852 7.808-2.836-16.538a1 1 0 0 1 .287-.885l12.016-11.713-16.605-2.413a1 1 0 0 1-.753-.547L27.934 4.578l-7.427 15.047a1 1 0 0 1-.753.547L3.149 22.584z" fill={props.color}/>
    </svg>
  )
};
