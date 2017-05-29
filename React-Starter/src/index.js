import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Questionaire from './components/questionaire';
import Prescription from './components/prescription';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       headAche : false,
       fever : false,
       stomachAche : false,
       msg : ''
   }

   this.state.msg = "An Apple a day keeps the doctor away!!";
  }

  render() {
   
    return (
      <div className = "main-container">
        <div className = "header">
          <h3>Patient Health Monitoring</h3>
        </div>
        <div className="questionaire-block">
          <Questionaire status = {this.state}/>
        </div>
        <div className="prescription-block">
          <Prescription message = {this.state.msg}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
