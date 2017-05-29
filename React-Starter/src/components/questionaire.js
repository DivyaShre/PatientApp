import React, { Component } from 'react';
import CheckBox from './checkbox';

class Questionaire extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "questions">
        <h5>Please select the symptoms</h5>
        {this.createCheckBox(this.props)}
      </div>
    );
  }

  toggleCheckboxChange = (props, value) => {
      if(props == 1){
        this.props.status.headAche = value;
        this.props.changeMethod(this.props, this.props.status);
      }
      else if(props == 2){
        this.props.status.fever = value;
        this.props.changeMethod(this.props, this.props.status);
      }
      else if(props == 3){
        this.props.status.stomachAche = value;
        this.props.changeMethod(this.props, this.props.status);
      }
  }

  createCheckBox = (props)=>{
    const checkboxItems = Object.keys(props.status).map((value,index) => {
      if(index == Object.keys(props.status).length - 1)
        return '';
      else
        return (
          <CheckBox
            label={`${value}`} value= {`${props.status[value]}`} index = {index+1} key = {index}
            onStatusChange = {this.toggleCheckboxChange}
            />
        );
    });

    return (
      <div>
        {checkboxItems}
      </div>
    );
  }
}

export default Questionaire;