import React, { Component } from 'react';
import Sessions from './sessions.js';
import Mileage from './mileage.js';
import Diem from './diem.js';
import Other from './other.js'


class Day extends Component {
  constructor(props){
    super(props);
    this.state = {
      numSessions: 3,
      mileage: 0,
      diem: 0,
      other: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    alert("this is the submit");
    event.preventDefault();
  }

  updateSessions (numSessions) {
    this.setState({numSessions: numSessions})
  }

  updateMileage (mileage) {
    this.setState({mileage: mileage})
  }
  updateDiem (diem) {
    this.setState({diem: diem})
  }

  updateOther (other) {
    this.setState({other: other})
  }
  addTheThings() {
    return this.state.mileage + this.state.numSessions + this.state.diem;
  }

  render() {
    const things = this.addTheThings();
    console.log(things)
    return (
      <div>
      <div className="day">
        <div className="card">
        <div className="card-header">Day 1</div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <Sessions
                updateSessions={this.updateSessions.bind(this)}
                numSessions={this.state.numSessions}
              />
              <Mileage
                updateMileage={this.updateMileage.bind(this)}
                mileage={this.state.mileage}
               />
              <Diem
                updateDiem={this.updateDiem.bind(this)}
                diem={this.state.diem}
              />
              <Other
                updateOther={this.updateOther.bind(this)}
                other={this.state.other}
              />
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Day;
