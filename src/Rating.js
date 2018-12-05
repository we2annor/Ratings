import React, { Component } from 'react';
import classNames from 'classnames';
import Head from './components/head'
import Modal from './container/modal/';
import Button from './components/button'
import './rating.scss';

class Rating extends Component {
  constructor(props){
    super(props)

    this.state = {
      modalVisible : false,
      rateUsButtonVisible: true
    }
  }

  onClickHandler = () => {
    console.log('hello handler')
    this.setState((prevState) => ({modalVisible: !prevState.modalVisible}));
    
  }

  render() {

    const btn = classNames({
      "button-container": true,
      "primary": true,
      "hide": this.state.modalVisible
    })
    return (
      <div className="Rating">
        <Head/>

        {/* Modal Component*/}
        <Modal visible={(this.state.modalVisible)? "true" : "false"}/>

        <div className={btn} onClick={this.onClickHandler.bind(this)}>
          <Button name="Please Rate Us"/>
        </div>
      </div>
    );
  }
}

export default Rating;
