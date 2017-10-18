import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.eventClass = this.eventClass.bind(this);
  };

  eventClass(event) {
    const { activeEvent } = this.props;
    return activeEvent === event ? 'event active' : 'event';
  };

  render() {
    const { onEventClick } = this.props;

    return (
      <div className="customer-container">
        <div className={this.eventClass('DRIP')} onClick={() => onEventClick('DRIP')}>
          DRIP
        </div>

        <div className={this.eventClass('FRENCH PRESS')} onClick={() => onEventClick('FRENCH PRESS')}>
          FRENCH PRESS
        </div>

        <div className={this.eventClass('AEROPRESS')} onClick={() => onEventClick('AEROPRESS')}>
          AEROPRESS
        </div>
      </div>
    );
  }
}

export default Customer;
