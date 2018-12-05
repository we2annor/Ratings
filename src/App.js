import React, { Component } from 'react';
import classNames from 'classnames';
import Head from './components/head/Head'
import Modal from './container/modal/Modal';
import Button from './components/button/Button'
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      modalVisible : false,
      submitted : false,
      submitJSON: ''
    }
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  submit = (questions) => {
    this.hideModal();

    this.setState({
      submitted: true,
      submitJSON : JSON.stringify(questions),
    })
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
        {this.state.modalVisible && (
          <Modal hideModal={this.hideModal} submit={this.submit}/>
        )}

        {!this.state.modalVisible && (
          <div className={btn} onClick={this.showModal}>
            <Button name="Please Rate Us"/>
          </div>
        )}

        {this.state.submitted && this.state.submitJSON && (
          <div className="submitted" style={{ maxWidth: 500, margin: 'auto', paddingTop: 100 }}>
            <h2>Thank you</h2>
            <p>{this.state.submitJSON}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
