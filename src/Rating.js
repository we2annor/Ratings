import React, { Component} from 'react';
import classNames from 'classnames';
import Head from './components/head'
import Modal from './container/modal/';
import Button from './components/button'
import './rating.scss';

class Rating extends Component {
  constructor(props){
    super(props)

    this.state = {
      modalVisible : false
    }

  }

  render() {

    console.log(this.props)
    return (
      <div className="Rating">
      <Head/>
      <Modal/>

        <div className="button-container">
          <Button name="Please Rate Us"/>
        </div>
      </div>
    );
  }
}

export default Rating;
