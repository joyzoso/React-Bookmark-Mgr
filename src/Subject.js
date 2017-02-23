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
    this.state = {buttonClick: true, headerClick: false, title: '', url: '', deleteValue: ''};
    this.buttonClick = this.buttonClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubjectDelete = this.handleSubjectDelete.bind(this);
    this.handleResourceDelete = this.handleResourceDelete.bind(this);

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
   }

   handleSubjectDelete(evt) {

       this.props.deleteSubject(this.props.index);
       evt.preventDefault();

       console.log(this.state);
   }

   handleResourceDelete(evt) {

     this.props.deleteResource(this.props.index, evt.target.name);
     evt.preventDefault();


   }
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
        <button onClick={this.handleSubjectDelete}> Delete Subject </button>
          <ul>
            {this.props.items.resources.map((resource, index) => {
              if(this.state.headerClick) {
              return(
                <li>
                <a href={resource.url}>{resource.title}</a>
                <br></br><button name={index} onClick={this.handleResourceDelete}> delete </button>
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
