import React, { Component } from 'react';

class Name extends Component {

  constructor(props){
   super(props);
   this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onSelectJudge(e.target.value);
    console.log(e.target.value);
  }


 render() {

   let judgeList = this.props.judges.map((judge, index) => (
     <option key={judge.id}>{judge.name}</option>
   ));
   //let displayName = this.props.judges(this.handleInputChange());

   //let chosenJudge = this.props.onSelectJudge;

    return (
      <div className="name">
        <div className="form-group">
          <label htmlFor="user">Judge</label>
          <select className="form-control" id="user"  onChange={this.handleInputChange}>
            {judgeList}
          </select>
        </div>
        <div value={this.props.judges}>"Hi" </div>
      </div>
    );
  }
}

export default Name;
