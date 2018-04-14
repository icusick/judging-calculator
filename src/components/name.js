import React, { Component } from 'react';

class Name extends Component {

  constructor(props){
   super(props);
   this.state = {
     values: [
       { name: 'Kali Rogers', id: 'krogers' },
       { name: 'Annie Alemda', id: 'aalmeda' },
       { name: 'Felicia Osterum', id: 'fosterum' }
     ]
   };
 }
 render() {
   let judgeList = this.state.values.map(v => (
     <option key={v.id} svalue={v.id}>{v.name}</option>
   ));

  //create a loop to list out all judges wthin the formInput


  //console.log(populateJudgeList(judge));

    return (
      <div className="name">
        <div className="form-group">
          <label htmlFor="user">Judge</label>
          <select className="form-control" id="user" value={this.state.value}>
            {judgeList}
          </select>
        </div>
      </div>
    );
  }
}

export default Name;
