import React, { Component } from 'react';
import classNames from 'classnames'
import RatingStars from '../../components/rating'
import Button from '../../components/button';
import CloseButton from '../../components/closeButton'
import './style/modal.scss';

class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      visible : false,
    }
  }

  onComponentDidMount = () => {
    this.setState((prevState) => ({visible: !prevState.visible}))
  }

  onCloseButtonClicked = () => {
    console.log('closed button clicked')
  }

  getRating = () => {

  }

  getStars = () => {
    console.log('stars collected');
  }

  render(){

    const modalClasses = classNames({
      "hide": this.state.visible,
      "modal-container": true,
    })

console.log(this.props.visible)
    return (
      <section visible={(this.props.visible)? "true" : "false"} className={modalClasses}>
        <CloseButton onClick={this.onCloseButtonClicked.bind(this)} width="20" height="20"/>

        <header className="header">
          <h2>How did we do?</h2>
        </header>

        <p>Please let us know how your food delivery was. It will really help us to improve our service!</p>

        <div className="ratings-container">
          <p>How would you rate your food?</p>
          <div className="stars">

              <RatingStars id="food" width ="19" height="19"
                color="#FFC80A"
                outlineColor="#979797"
                active={true}
                max={5}
                rating={2}
              />
          </div>

          <p>How would you rate your delivery driver?</p>
          <div className="stars">
            <RatingStars id="driver" width ="19" height="19"
            color="#FFC80A"
            outlineColor="#979797"
            max={5}
            rating={4}
            />
          </div>

          <p>How would you rate your overall experience</p>
          <div className="stars">
            <RatingStars id="experience" width ="19" height="19"
            color="#FFC80A"
            outlineColor="#979797"
            max={5}
            rating={4}
            />
          </div>
        </div>

        <Button class="primary" onClick={this.getStars.bind(this)} name="Submit feedback"/>
      </section>
    )
  };
};

export default Modal
