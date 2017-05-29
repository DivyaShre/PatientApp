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

  handleChange(label,value,msg){
    if(label == 'headAche')
      this.setState({headAche:value});
    else if(label == 'fever')
      this.setState({fever:value});
    else if(label == 'stomachAche')
      this.setState({stomachAche: value});

    this.setState({msg: msg});
  }

  render() {
   
    return (
      <div className = "main-container">
        <div className = "header">
          <h3>Patient Health Monitoring</h3>
        </div>
        <div className="questionaire-block">
          <Questionaire status = {this.state} onChange = {(label,value,msg)=>{this.handleChange(label,value,msg)}}/>
        </div>
        <div className="prescription-block">
          <Prescription message = {this.state.msg}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
