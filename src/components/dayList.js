import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Day from './day.js';

class DayList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNewDay: false,
      day1Total: 0,
      day2Total: 0,
      day3Total: 0
    };
    this.dayList = this.dayList.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  };

  dayList() {
    const days = [1, 2, 3];
    const dayList = days.map((day) =>
      <Day />
    );
    console.log("daylist function");
    return dayList;
  }

  populateDayList () {
    //give me me one day if my list is empty
    //else copy the array
    //push a day onto the copy
    //put the copy back in state
  }

  handleOnClick(event) {
    console.log("onclick");
    this.setState({showNewDay: true});
  }


  render() {
    return (
      <div>
        <Day />
        {/*onclick add another day here - run the addDay function*/}
        {this.state.showNewDay ? <Day /> : null}
        <div className="nav-link" onClick={this.handleOnClick}><div className="add-day"><span><i className="fas fa-plus-circle"></i> Add Day</span></div></div>
        <Link className="nav-link" to='/fee'>
          <button>Estimate Payment</button>
        </Link>
      </div>
    )
  }
}

export default DayList;
