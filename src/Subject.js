//need on every line
import React, { Component } from 'react';

//exporting and creating class/component called Subject
export default class Subject extends Component {
  //initializing constructor method and have to pass in props if component is not inheriting from other props
  //if component is going to be rendered in other copeonents then pass props
  constructor(props){
    //passsing props to the component class that we are extending
    //so we can access it through this.props, etc...
    //you will always need super if extending to another constructor
    super(props);
    this.state = {buttonClick: true, headerClick: false};
    this.buttonClick = this.buttonClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  //event handlers here



buttonClick() {
  this.setState(prevState => ({
    //take whatever you were and flip it
  buttonClick: !prevState.buttonClick
  }));
  console.log(this.state.buttonClick);
}

headerClick() {
  this.setState(prevState => ({
    headerClick: !prevState.headerClick
  }));
  console.log(this.state.headerClick);
}

handleTyping(event) {
  this.setState({newResourceTitle: event.target.value});
  event.preventDefault();
  console.log(this.state.newResourceTitle);
}

// handleKeyPress(event) {
//   if(event.key === 'Enter') {
//     this.setState({ value: event.target.value })
//     console.log(this.state.value);
//   }
// }

//just like any component, you need to render it
render() {
  //actually returning the view below (aka <h1>,,,,,,)
  return(
    //now inherited props from the app component and rendering them here//
    //map loops over items in the array

    <div>
    <button onClick={this.buttonClick}>{this.state.buttonClick ? 'WOW' : 'GAH'}</button>
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
          <input type="text" onChange={this.handleTyping}/>
    </div>
    )

  }
}
