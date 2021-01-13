import React, { Component } from 'react';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.incrementCounter = props.incrementCounter;    
    this.decrementCounter = props.decrementCounter;    
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.props.currentCount}</strong></p>

        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}
