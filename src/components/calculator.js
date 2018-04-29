import React, { Component } from 'react';
import Name from './name.js'
import Location from './location.js'
import DayList from './dayList.js'
import Fee from './fee.js'

class Calculator extends Component {


  constructor(props){
    super(props);
    this.selectedJudge = this.selectedJudge.bind(this)
    this.state = {
      judges: [
        {name: '', rating: '', address: '', id: ''},
        {name: 'Kali Rogers', rating: "10", address: "2145 Silverwood Lane Chesterfield MO 63017", id: "krogers"},
        {name: 'Annie Alameda', rating: "N", address: "13202 Cantina Drive St. Louis MO 63141", id: "aalameda"},
        {name: 'Felicia Ostrom', rating:	"10", address:	"592 Victoria Dr. Labadie MO 63055", id: "fostrom"}
      ],
      meetLocation: '',
      grandTotal: 0,
      selectedJudge: null
    }
  }

  selectedJudge(name) {
    const judge = this.state.judges.filter(judge => judge.name === name);
    console.log(judge);
    this.setState({selectedJudge: judge[0]} );
    //this.setState({selectedJudge: judge[0]});
    console.log("this is the selected judge: " + judge[0].name);
    return <div>{judge[0].name}</div>

  }

  render() {
    //console.log({this.selectedJudge});
    return (
      <div className="container">
        <h1>Judging Fee Calculator</h1>
        <Name
          judges={this.state.judges}
          onSelectJudge={this.selectedJudge}
        />
        <Location location={this.state.location}/>
        <DayList />
        <Fee selectedJudge={this.selectedJudge} judges={this.state.judges} />
      </div>
    );
  }
}

export default Calculator;
