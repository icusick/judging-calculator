import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div className="name">
        <div className="form-group">
        <label className="location" htmlFor="location">Meet Location</label>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Street" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="State" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Zip" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
