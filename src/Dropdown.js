import React, { Component } from 'react';

export default class Dropdown extends Component {

constructor(props) {
  super(props);
  this.handleDropdown = this.handleDropdown.bind(this);
  this.state = {handleDropdown: ''};

}

handleDropdown(evt) {
    if(this.state.value !== evt.target.value) {
     this.setState({
       selectValue:evt.target.value
     });
   }
     console.log(evt.target.value);
   };


render() {
  var message='You selected '+this.state.selectValue;
  return (
<div>
      <select value={this.state.selectValue}
        onChange={this.handleDropdown}>
         <option value="Orange">Orange</option>
         <option value="Radish">Radish</option>
         <option value="Cherry">Cherry</option>
       </select>
       {message}
 </div>
 );
}


}
