import React, { Component } from 'react';

class Location extends Component {


  render() {
    return (
      <div className="name">
        <div class="form-group">
        <label class="location" for="location">Meet Location</label>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Street" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="City" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="State" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Zip" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
