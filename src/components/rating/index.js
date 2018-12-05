import React from 'react';
import { Star } from '../star/Star'

const RatingStars = (props) => {

    const stars=[];

    for(let i = 1; i < props.max + 1; i++){
      let star = {
        active: false,
        id: i
      }

      if(i <= props.rating){
        star.active = true;
        star.id = i+1
      }

      stars.push(star)
    }

    const onStarClickHandler = (e) => {
      let starCount = 0;
      console.log(e.currentTarget.dataset.id)
      starCount ++;
    }

  return(
    <div className="ratingStars" onClick={onStarClickHandler}>
      {stars.map((star, index) => (
        <Star
          key={index}
          color={props.color}
          outlineColor = {props.outlineColor}
          active = {star.active}
          width={props.width}
          height={props.height}
          fillColor={props.fillColor}
        />
      ))}
    </div>
  )
}

export default RatingStars
