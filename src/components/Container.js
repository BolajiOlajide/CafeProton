import React, { Component } from 'react';

// components
import Customer from './CustomerComponent';
import Barista from './BaristaComponent';
import Machine from './MachineComponent';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: ''
    };

    this.onEventClick = this.onEventClick.bind(this);
  };

  onEventClick(event) {
    this.setState({ activeEvent: event })
  }

  render() {
    const { activeEvent } = this.state;

    return (
      <div className="container">
        <h1>Make A Selection</h1>
        <div className="components">
          <Customer
            activeEvent={activeEvent}
            onEventClick={this.onEventClick}
          />
          <Barista />
          <Machine />
        </div>
      </div>
    );
  };
}

export default Container;
