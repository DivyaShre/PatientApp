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
        <div className="check-box">
          {this.createCheckBox(this.props)}
        </div>
      </div>
    );
  }

  toggleCheckboxChange = (props, value) => {
    let message = '';
    if(props == 1){
      this.props.status.headAche = value;
    }
    else if(props == 2){
      this.props.status.fever = value;
    }
    else if(props == 3){
      this.props.status.stomachAche = value;
    }

    if(this.props.status.headAche && this.props.status.fever && this.props.status.stomachAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.headAche && this.props.status.fever){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.fever && this.props.status.stomachAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.headAche && this.props.status.stomachAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.headAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.fever){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.stomachAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else{
        message ="This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    } 

    this.props.status.msg = message;
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