import React, { Component } from 'react';
import ToggleBox from './toggle.js';
import MileageCalc from './mileage-calc.js'


class Mileage extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

//google api key: AIzaSyCodRWSFX-atzFYcHTNJamzJNnoi-g-37k

  handleInputChange(event) {
    this.props.updateMileage(event.target.value);
  }

  render() {
    return (

      <div className="list-wrapper">
        <li className="list-group-item">
          <ToggleBox formInput={this.props.mileage} title="Mileage">
            <div className="row mileage-open">
              <div className="col extra-padding">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Change mileage" value={this.props.mileage} onChange={this.handleInputChange} />
                  <MileageCalc />
                </div>
              </div>
            </div>
          </ToggleBox>
        </li>
      </div>
    );
  }
}

export default Mileage;
