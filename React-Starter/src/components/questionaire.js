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
    let message = '', label = '';
    if(props == 1){
      this.props.status.headAche = value;
      label = "headAche";
    }
    else if(props == 2){
      this.props.status.fever = value;
      label = "fever";
    }
    else if(props == 3){
      this.props.status.stomachAche = value;
      label = "stomachAche";
    }

    if(this.props.status.headAche && this.props.status.fever && this.props.status.stomachAche){
        message = "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
    }else if(this.props.status.headAche && this.props.status.fever){
        message = "We suggest you to take tablet Dolo 650 two times for today. If it continues, please visit your nearest doctor!!"
    }else if(this.props.status.fever && this.props.status.stomachAche){
        message = "We suggest you to take tablet Sporlac and Crocin two times for today. If it continues, please visit your nearest doctor!!"
    }else if(this.props.status.headAche && this.props.status.stomachAche){
        message = "We suggest you to take tablet Sporlac two times for today. If it continues, please visit your nearest doctor!!"
    }else if(this.props.status.headAche){
        message = "This symptom is very common. We suggest you to take tablet Crocin and rest well!";
    }else if(this.props.status.fever){
        message = "We suggest you to take tablet Dolo 650 two times for today. If it continues, please visit your nearest doctor!!"
    }else if(this.props.status.stomachAche){
        message = "We suggest you to take tablet Sporlac two times for today. If it continues, please visit your nearest doctor!!"
    }else{
        message = "An Apple a day keeps the doctor away!!";
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