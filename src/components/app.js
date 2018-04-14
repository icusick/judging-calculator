import React, { Component } from 'react';
import '../App.css';
import Calculator from './calculator.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
