import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    const { title, children } = this.props;
    const { opened } = this.state;
    return (
      <div>
      <div class="row">
        <div class="col boxTitle" onClick={this.toggleBox}>
        {title} <span><i class="fas fa-caret-down"></i></span>
        </div>
        <div class="col-2 align-right">3</div>
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
export default ToggleBox;
