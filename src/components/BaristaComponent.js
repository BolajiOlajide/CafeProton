import React, { Component } from 'react';

class Barista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: ''
    };
  };

  render() {
    return (
      <div className="barista-container">
        <h3>{this.props.orderType}</h3>
      </div>
    );
  }
}

export default Barista;
