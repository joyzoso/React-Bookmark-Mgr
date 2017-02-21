//need on every line
import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

//exporting and creating class/component called Subject
export default class Subject extends Component {
  //initializing constructor method and have to pass in props if component is not inheriting from other props
  //if component is going to be rendered in other copeonents then pass props
  constructor(props){
    //passsing props to the component class that we are extending
    //so we can access it through this.props, etc...
    //you will always need super if extending to another constructor
    super(props);
    this.state = {buttonClick: true, headerClick: false, title: '', url: ''};
    this.buttonClick = this.buttonClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDropdown = this.handleDropdown.bind(this);

    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

handleSubmit(event) {
event.preventDefault();
const newResource = {
  title: this.state.title,
  url: this.state.url
}
  this.props.addResource(this.props.index, newResource);

}


buttonClick() {
  this.setState(prevState => ({
    //take whatever you were and flip it
  buttonClick: !prevState.buttonClick
  }));
  console.log(this.state);
}

headerClick() {
  this.setState(prevState => ({
    headerClick: !prevState.headerClick
  }));
  // console.log(this.state);

}

handleTyping(event) {
  this.setState({[event.target.name]: event.target.value});
  event.preventDefault();
  console.log(this.state);
}

handleDropdown(evt) {
    if(this.state.value !== evt.target.value) {
     this.setState({
       selectValue:evt.target.value
     });
   }
     console.log(evt.target.value);
   };
// handleKeyPress(event) {
//   if(event.key === 'Enter') {
//     this.setState({ value: event.target.value })
//     console.log(this.state.value);
//   }
// }

//just like any component, you need to render it
render() {
  //actually returning the view below (aka <h1>,,,,,,)
  const title = "title";
  const url = "url";
  return(
    //now inherited props from the app component and rendering them here//
    //map loops over items in the array

    <div>
        <h1 onClick={this.headerClick}>{this.props.items.subject}</h1>
          <ul>
            {this.props.items.resources.map((resource) => {
              if(this.state.headerClick) {
              return(
                <li>
                <a href={resource.url}>{resource.title}</a>
                </li>
                    )
                  }
                })
            }
          </ul>
        <form>
          <input name="title" type="text" placeholder = {title} onChange={this.handleTyping}/>
          <input name="url" type="text" placeholder = {url} onChange={this.handleTyping}/>
          <button onClick={this.handleSubmit}> Show it! </button>
        </form>
        <button onClick={this.buttonClick}>{this.state.buttonClick ? 'WOW' : 'GAH'}</button>
        <br></br>
        <div><Dropdown/></div>
    </div>
        )
  }
}
