import React, { Component } from 'react';
import Rating from '../../components/rating/Rating'
import Button from '../../components/button/Button';
import CloseButton from '../../components/closeButton/CloseButton';
import './style/Modal.scss';

//Modal component
class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      questions : [
        {
          question: 'How would you rate your food?',
          rating: 0
        },
        {
          question: 'How would you rate your delivery driver?',
          rating: 0
        },
        {
          question: 'How would you rate your overall experience?',
          rating: 0
        }
      ]
    };
  };

  submit = () => {
    this.props.submit(this.state.questions)
  }

  //Selecting star ratings based on the question index
  selectRating = (questionIndex, rating) => {
    const questions = this.state.questions;
    questions[questionIndex].rating = rating;

    this.setState({
      questions
    })
  }

  render(){

    return (
      <section className="modal-container">
        <CloseButton onClick={this.props.hideModal} width="20" height="20"/>

        <header className="header">
          <h2>How did we do?</h2>
        </header>

        <p>Please let us know how your food delivery was. It will really help us to improve our service!</p>

        <div className="ratings-container">

        {this.state.questions.map((question, index)=>(
          <React.Fragment   key={index}>
            <p>{question.question}</p>
            <div className="stars">

                <Rating width ="30" height="30"
                  color="#FFC80A"
                  outlineColor="#979797"
                  active={true}
                  max={5}
                  questionIndex={index}
                  rating={question.rating}
                  selectRating={this.selectRating}
                />
            </div>
          </React.Fragment>
        ))
        }
      </div>

      <Button onClick={this.submit} name="Submit feedback"/>
      </section>
    )
  };
};

export default Modal
