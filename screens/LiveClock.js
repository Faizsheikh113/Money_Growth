import React, { Component } from 'react';
import { Text } from 'react-native';

class LiveClock extends Component {
  constructor(props) {
    super(props);

    // Initialize the state with the current date and time
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    // Update the time every second
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;

    // Format the date and time as a string
    const formattedTime = currentTime.toLocaleString();

    return (
      <Text>{formattedTime}</Text>
    );
  }
}

export default LiveClock;
