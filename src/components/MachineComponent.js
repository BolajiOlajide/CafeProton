import React, { Component } from 'react';

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="machine-container">
        <h3>{this.props.status}</h3>
      </div>
    );
  }
}

export default Machine;