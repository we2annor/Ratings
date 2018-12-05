import React from 'react';
import './Star.scss';

export const Star= (props) => {

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
      <svg className="star" width={props.width} height={props.height} viewBox="0 0 18 18"
        onClick={() => { props.selectRating(props.questionIndex, props.starIndex + 1) }}>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-792.000000, -174.000000)" fill={style.color} stroke={style.outlineColor}>
                  <g transform="translate(719.000000, 174.000000)">
                      <polygon points="83.499 8.296 84.325 13 79.999 10.78 75.672 13 76.498 8.296 72.998 4.966 77.836 4.279 79.999 0 82.162 4.279 87 4.966"></polygon>
                  </g>
              </g>
          </g>
      </svg>
    );
};
