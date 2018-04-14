import React, { Component } from 'react';
import ToggleBox from './toggle.js';

class Other extends Component {
  constructor(props){
    super(props);
    this.state = {other: '0'};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({other: event.target.value});
  }

  render() {
    return (
      <div>
        <li className="list-group-item">
          <ToggleBox formInput={this.state.other} title="Other">
            <div className="row other-open">
              <div className="col extra-padding">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Other expenses" value={this.state.mileage} onChange={this.handleInputChange} />
                </div>
              </div>
            </div>
          </ToggleBox>
        </li>
      </div>
    );
  }
}

export default Other;
