import React, { Component } from 'react';

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
      <div className="row">
        <div className="col boxTitle" onClick={this.toggleBox}>
        {title} <span><i className="fas fa-caret-down"></i></span>
        </div>
        <div className="col-4 align-right"><div>{formInput}</div></div>
      </div>
      <div className="box">
        {opened && children && (
          <div className="boxContent">
            {children}
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default ToggleBox;
