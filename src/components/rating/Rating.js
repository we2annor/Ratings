import React from 'react';
import { Star } from '../star/Star'

//Rating component which generates the stars
const Rating = (props) => {

    const stars=[];

    for(let i = 1; i < props.max + 1; i++){
      let star = {
        active: false,
      }

      if(i <= props.rating){
        star.active = true;
      }

      stars.push(star)
    }

  return(
    <div className="ratingStars">
      {stars.map((star, index) => (
        <Star
          key={index}
          questionIndex={props.questionIndex}
          starIndex = {index}
          color={props.color}
          outlineColor = {props.outlineColor}
          active = {star.active}
          width={props.width}
          height={props.height}
          fillColor={props.fillColor}
          selectRating={props.selectRating}
        />
      ))}
    </div>
  )
}

export default Rating
