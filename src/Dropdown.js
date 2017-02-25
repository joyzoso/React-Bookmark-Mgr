import React, { Component } from 'react';
import Icon from 'react-fa';

export default class Dropdown extends Component {

constructor(props) {
  super(props);
  this.handleDropdown = this.handleDropdown.bind(this);
  this.state = {selectValue: ''};

}

handleDropdown(evt) {
    if(this.state.value !== evt.target.value) {
      this.setState({
       selectValue:evt.target.value
      });
    }
  };


render() {
  var message='You selected '+this.state.selectValue;
  return (

      <div>
          <select value={this.state.selectValue} onChange={this.handleDropdown}>
          <option value="Functional Programming">Functional Programming</option>
          <option value="ES6 Basics">ES6 Basics</option>
          <option value="React Basics">React Basics</option>
          <option value="React Advanced">React Advanced</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select> {message} <Icon name="thumbs-o-up"/>
      </div>
      );
    }

}
