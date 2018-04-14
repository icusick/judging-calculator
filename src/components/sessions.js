import React, { Component } from 'react';
import ToggleBox from './toggle.js';

class Sessions extends Component {
    constructor(props){
      super(props);
      this.state = {numSessions: 3};
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      this.setState({numSessions: event.target.value});
    }

    render() {
      return (
        <div className="list-wrapper">
          <li className="list-group-item">
          <ToggleBox formInput={this.state.numSessions} title="Number of Sessions">
            <div className="row sessions-open">
              <div className="col">
                <div className="form-group">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={this.state.numSessions === '1'} onChange={this.handleInputChange} value="1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" checked={this.state.numSessions === '2'} onChange={this.handleInputChange} value="2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" checked={this.state.numSessions === '3'} onChange={this.handleInputChange} value="3" />
                    <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" checked={this.state.numSessions === '4'} onChange={this.handleInputChange} value="4" />
                    <label className="form-check-label" htmlFor="inlineRadio3">4</label>
                  </div>
                </div>
              </div>
            </div>
            </ToggleBox>
          </li>
        </div>
      );
    }
}

export default Sessions;
