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
   console.log(this.state);
  }

  render() {
   
    return (
      <div className = "main-container">
        <div className = "header">
          <h3>Patient Health Monitoring</h3>
        </div>
        <div className="questionaire-block">
          <Questionaire status = {this.state} changeMethod = {(state,val)=>this.generatePrescription(state,val)}/>
        </div>
        <div className="prescription-block">
          <Prescription message = {this.state.msg}/>
        </div>
      </div>
    );
  }

  generatePrescription(state, val){
      console.log(state);
      console.log(val);
      if(state.status.headAche && state.status.fever && state.status.stomachAche){
       this.state.setState({
        msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
      });
      }else if(state.status.headAche && state.status.fever){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'DOLO 350' for today. If it is not under control, please visit your nearest doctor";
      }else if(state.status.fever && state.status.stomachAche){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Crocin and Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else if(state.status.headAche && state.status.stomachAche){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else if(state.status.headAche){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Crocin' for today. This symptom seems to be very normal. Please try not to take tension and rest well";
      }else if(state.status.fever){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Dolo' for today. If it is not under control, please visit your nearest doctor";
      }else if(state.status.stomachAche){
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else{
        this.state.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "An Apple a day keeps the doctor away!!";
      }  
      console.log("After change")
      console.log(this.state)
  }


}

ReactDOM.render(<App />, document.querySelector('.container'));
