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
    super(props)
  }

  //event handlers here


//just like any component, you need to render it
render() {
  //actually returning the view below (aka <h1>,,,,,,)
  return(
    //now inherited props from the app component and rendering them here//
    //map loops over items in the array
    <div>
        <h1>{this.props.items.subject}</h1>
          <ul>
            {this.props.items.resources.map((resource) => {
              return(
                <li>
                <a href={resource.url}>{resource.title}</a>
                </li>
              )}
            )}
          </ul>
    </div>
    )

  }
}
