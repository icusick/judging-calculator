import React, { Component } from 'react';


class Fee extends Component {


  render() {
    console.log('Fee component ' + this.props.judges);
    console.log(this.props.selectedJudge);
    return (
      <div className="container">
       <h1>Fee Calculation Page</h1>
       <div className="day">
         <div className="card">
         <div className="card-header">Day 1</div>
           <div className="card-body">
             <ul className="list-group list-group-flush">

             </ul>
           </div>
         </div>
       </div>
    </div>
    )
  }
}

export default Fee;
