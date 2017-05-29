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
    console.log("props="+props);
    console.log("value="+value);
    console.log(this.props.changeMethod)
      if(props == 1){
        this.props.status.headAche = value;
        //this.props.changeMethod(this.props, this.props.status);
      }
      else if(props == 2){
        this.props.status.fever = value;
        //this.props.changeMethod(this.props, this.props.status);
      }
      else if(props == 3){
        this.props.status.stomachAche = value;
        //this.props.changeMethod(this.props, this.props.status);
      }

      if(this.props.status.headAche && this.props.status.fever && this.props.status.stomachAche){
       this.props.status.setState({
        msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
      });
      }else if(this.props.status.headAche && this.props.status.fever){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'DOLO 350' for today. If it is not under control, please visit your nearest doctor";
      }else if(this.props.status.fever && this.props.status.stomachAche){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Crocin and Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else if(this.props.status.headAche && this.props.status.stomachAche){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else if(this.props.status.headAche){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Crocin' for today. This symptom seems to be very normal. Please try not to take tension and rest well";
      }else if(this.props.status.fever){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Dolo' for today. If it is not under control, please visit your nearest doctor";
      }else if(this.props.status.stomachAche){
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "We would suggest you to take tablet 'Sporlac' for today. If it is not under control, please visit your nearest doctor";
      }else{
        this.props.status.setState({
          msg : "This symptom seems too serious!! We suggest you to go to doctor immedietly!!"
        });
        //val.msg = "An Apple a day keeps the doctor away!!";
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