import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Name from './name.js'
import Location from './location.js'
import Day from './day.js'
import ToggleBox from './toggle.js'

class App extends Component {
  render() {
    return (
      <div class="container">
        <h1>Judging Fee Calculator</h1>
        <Name />
        <Location />
        <Day />
      </div>
    );
  }
}

export default App;
