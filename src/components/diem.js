import React, { Component } from 'react';
import ToggleBox from './toggle.js';

class Diem extends Component {
  constructor(props){
    super(props);
    this.state = {diem: 0};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let diemTotal = event.target.value;
    if(event.target.checked === true){
       diemTotal = parseInt(event.target.value, 10) + 15;
    }
    else {
      diemTotal = parseInt(event.target.value, 10) - 15;
    }
    this.setState({diem: diemTotal});
  }

  addDiem(){
    return 15;
  }

  render() {
    return (
      <div className="list-wrapper">
        <li className="list-group-item">
          <ToggleBox formInput={this.state.diem} title="Diem">
            <div className="row diem-open">
            <div className="col">
            <div>{this.addDiem}</div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={this.state.diem} onChange={this.handleInputChange} />
                  <label className="form-check-label" htmlFor="inlineRadio1">Breakfast</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value={this.state.diem} onChange={this.handleInputChange} />
                  <label className="form-check-label" htmlFor="inlineRadio2">Lunch</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value={this.state.diem} onChange={this.handleInputChange} />
                  <label className="form-check-label" htmlFor="inlineRadio3">Dinner</label>
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

export default Diem;
