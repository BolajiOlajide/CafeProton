import React, { Component } from 'react';

// components
import Customer from './CustomerComponent';
import Barista from './BaristaComponent';
import Machine from './MachineComponent';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: '',
      orderType: 'HELLO, HOW MAY I HELP YOU TODAY?',
      status: ''
    };

    this.onEventClick = this.onEventClick.bind(this);
    this.coffeeFinished = this.coffeeFinished.bind(this);
  };

  onEventClick(event) {
    this.setState({ 
      activeEvent: event,
      orderType: `One ${event}? That will be $1.`
    });
    const startSound = document.getElementById('start');
    startSound.play();
    if (!startSound) return; 
    startSound.currentTime = 0;
    startSound.play();
    setTimeout(function() {
      this.setState({
        orderType: `Waiting for ${event}!`,
        status: `Currently brewing ${event}`
      });
      this.coffeeFinished(event);
    }.bind(this), 5000);
  }

  coffeeFinished(event) {
    setTimeout(function() {
      this.setState({ 
        orderType: `Here is your ${event}, enjoy!`,
        status: `${event} is done.`
      });
    }.bind(this), 5000)
  }

  render() {
    const { activeEvent, orderType, status } = this.state;

    return (
      <div className="container">
        <h1>Make A Selection</h1>
        <audio src="http://soundbible.com/mp3/front-desk-bells-daniel_simon.mp3" id="start"></audio>
        <div className="components">
          <Customer
            activeEvent={activeEvent}
            onEventClick={this.onEventClick}
          />
          <Barista 
            orderType={orderType}
            activeEvent={activeEvent}
            brewCoffee={this.brewCoffee}
          />
          <Machine 
            activeEvent={activeEvent}
            status={status}
          />
        </div>
      </div>
    );
  };
}

export default Container;
