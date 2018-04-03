import React, { Component } from 'react';

{/* Need to know, how to pass data, how to get check boxes working
  article on transitions: https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935
  ToDO:
  Route to different page after submit is clicked
  I installed react-router and react-router-dom, is this a problem? if so should I uninstall react-router?

  */}

class Day extends Component {
  constructor(props){
    super(props);
    this.state = {numSessions: 3};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    this.setState({numSessions: event.target.value});
  }

  handleSubmit(event) {
    alert("this is the submit");
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div className="day">
        <div class="card">
        <div class="card-header">Day 1</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <Sessions />
              <Mileage />
              <Diem />
              <Other />
            </ul>
          </div>
        </div>
      </div>
      <div class="add-day"><span><i class="fas fa-plus-circle"></i> Add Day</span></div>
      <input type="submit" value="Submit" />
      </div>
    );
  }
}

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
        <div class="list-wrapper">
          <li class="list-group-item">
          <ToggleBox formInput={this.state.numSessions} title="Number of Sessions">
            <div class="row sessions-open">
              <div class="col">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={this.state.numSessions === '1'} onChange={this.handleInputChange} value="1"/>
                    <label class="form-check-label" for="inlineRadio1">1</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" checked={this.state.numSessions === '2'} onChange={this.handleInputChange} value="2" />
                    <label class="form-check-label" for="inlineRadio2">2</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" checked={this.state.numSessions === '3'} onChange={this.handleInputChange} value="3" />
                    <label class="form-check-label" for="inlineRadio3">3</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" checked={this.state.numSessions === '4'} onChange={this.handleInputChange} value="4" />
                    <label class="form-check-label" for="inlineRadio3">4</label>
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

class Mileage extends Component {
  constructor(props){
    super(props);
    this.state = {mileage: '0'};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({mileage: event.target.value});
  }

  render() {
    return (
      <div class="list-wrapper">
        <li class="list-group-item">
          <ToggleBox formInput={this.state.mileage} title="Mileage">
            <div class="row mileage-open">
              <div class="col extra-padding">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Change mileage" value={this.state.mileage} onChange={this.handleInputChange} />
                </div>
              </div>
            </div>
          </ToggleBox>
        </li>
      </div>
    );
  }
}

class Diem extends Component {
  constructor(props){
    super(props);
    this.state = {diem: '0'};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    {/*if box is checked add this.state.diem, if not is un checked subtract this.state.diem*/}
    this.setState({diem: parseInt(event.target.value) + parseInt(this.state.diem)});
  }

  addDiem(){
    return 15;
  }

  render() {
    return (
      <div class="list-wrapper">
        <li class="list-group-item">
          <ToggleBox formInput={this.state.diem} title="Diem">
            <div class="row diem-open">
            <div class="col">
            <div>{this.addDiem}</div>
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={this.state.diem} onChange={this.handleInputChange} value="15" />
                  <label class="form-check-label" for="inlineRadio1">Breakfast</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value={this.state.diem} onChange={this.handleInputChange} value="15" />
                  <label class="form-check-label" for="inlineRadio2">Lunch</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value={this.state.diem} onChange={this.handleInputChange} value="15" />
                  <label class="form-check-label" for="inlineRadio3">Dinner</label>
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
        <li class="list-group-item">
          <ToggleBox formInput={this.state.other} title="Other">
            <div class="row other-open">
              <div class="col extra-padding">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Other expenses" value={this.state.mileage} onChange={this.handleInputChange} />
                </div>
              </div>
            </div>
          </ToggleBox>
        </li>
      </div>
    );
  }
}
class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // toggle box is closed initially
      opened: false,
    };
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    // check if box is currently opened
    const { opened } = this.state;
    this.setState({
      // toggle value of `opened`
      opened: !opened,
    });
  }

  render() {
    const { title, children, formInput } = this.props;
    const { opened } = this.state;
    return (
      <div>
      <div class="row">
        <div class="col boxTitle" onClick={this.toggleBox}>
        {title} <span><i class="fas fa-caret-down"></i></span>
        </div>
        <div class="col-4 align-right"><div>{formInput}</div></div>
      </div>
      <div className="box">
        {opened && children && (
          <div class="boxContent">
            {children}
          </div>
        )}
      </div>
      </div>
    );
  }
}


export default Day;
