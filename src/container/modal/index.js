import React, { Component } from 'react';
import { Star } from '../../components/star/Star';
import Button from '../../components/button';
import CloseButton from '../../components/closeButton'
import './style/modal.scss';

class Modal extends Component {
  render(){
    return (
      <section className="modal-container">
        <CloseButton width="20" height="20"/>
        <header className="header">
          <h2>How did we do?</h2>
        </header>
        <p>Please let us know how your food delivery was. It will really help us to improve our service!</p>
        <div className="ratings-container">
          <p>How would you rate your food?</p>
          <div className="stars">
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
          </div>

          <p>How would you rate your delivery driver?</p>
          <div className="stars">
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
          </div>

          <p>How would you rate your overall experience</p>
          <div className="stars">
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
              <Star width="20" height="20"/>
          </div>
        </div>

        <Button class="primary" name="Submit feedback"/>
      </section>
    )
  };
};

export default Modal
