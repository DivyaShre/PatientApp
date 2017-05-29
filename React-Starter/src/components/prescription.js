import React, { Component } from 'react';

class Prescription extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <div>
        <div className = "header">
          <h5>Prescription</h5>
        </div>
        <div>
          <h5>{this.props.message}</h5>
        </div>
      </div>
    );
  }

}

export default Prescription;
