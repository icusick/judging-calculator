import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="name">
        <div class="form-group">
          <label for="user">Judge</label>
          <select class="form-control" id="user">
            <option>Kali</option>
            <option>Annie</option>
            <option>Megan</option>
            <option>Felicia</option>
            <option>Edye</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Name;
