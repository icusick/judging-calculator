import React, { Component } from 'react';
import Name from './name.js'
import Location from './location.js'
import DayList from './dayList.js'

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: {},
      location: '',
      grandTotal: 0
    }

  }
  render() {
    return (
      <div className="container">
        <h1>Judging Fee Calculator</h1>
        <Name name={this.state.name} />
        <Location location={this.state.location}/>
        <DayList />
      </div>
    );
  }
}

export default Calculator;
