import React, {Component} from 'react';
import ReactDom from 'react-dom';

class CheckBox extends Component {
	constructor(props){
		super(props);
	}

	state={
		isChecked : false
	}

	render(){
		return(
	      
		    <div>
		      <label>
		        <input
                    type="checkbox"
                    value= {this.props.label}
                    checked= {this.isChecked}  
                   onChange={()=>this.props.onStatusChange(this.props.index,this.isChecked = !this.isChecked)}/>
		        {this.props.label}
		      </label>
		    </div>
		);
	}
}

export default CheckBox;