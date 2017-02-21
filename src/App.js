//destructuring the component
import React, { Component } from 'react';
// importing component from the file
import Subject from './Subject.js';
import Dropdown from './Dropdown.js'
import SubjectForm from './SubjectForm'

//creating new class/component called app, which inherits from the component class
class App extends Component {
  //construcor function for everu new class/component that is created
  constructor() {
    //super function is always needed when calling constructor
    //super means I am a class that is inherited and want to defint its pwn constructor
    super();

    //state can only be initially set for the component (so intitializing state for the compnent)
    //creating an object (state object), in this case called resources
    this.state = {
      subject: '',
      resources: [
      //array of resources grouped by categories
      //two elements in my resources array
      {subject: "Functional Programming/JS Basics", resources:
      //resources array with 3 resource objects
      // 2 elements inside each of these 3 objects
                [
                  {title: "Higher Order Functions ", url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
                  {title: "ES6 Video 1 ", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
                  {title: "ES6 Video 2 ", url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},
                  {title: "Learning JS in 2016", url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1"},
                  {title: "Spread Operator", url: "https://davidwalsh.name/spread-operator"},
                  {title: "Hexlet Programming", url: "https://en.hexlet.io/courses/intro_to_programming"},
                  {title: "Functional Programming in JS", url: "https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257#.t0uh9k9zm"}
                ]
      },

      //another resources array with N objects, each having 2 elements
      {subject: "ES6 Basics", resources:
                [
                  {title: "Var Let & Const", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
                  {title: "Arrow Functions ", url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},
                  {title: "Essential ES6 ", url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                  {title: "Var Let Const In Depth ", url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.spp2fc46g"},
                  {title: "ES5 to ES6 Conversion ", url: "http://stack.formidable.com/es6-interactive-guide/#/"},
                  {title: "ES6 Cheat Sheet Part 1 ", url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                  {title: "ES6 Cheat Sheet Part 2 ", url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                  {title: "Egghead ES6 ", url: "https://egghead.io/courses/learn-es6-ecmascript-2015"},
                  {title: "Essential ES6 ", url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                  {title: "German ES6 Basics", url: "https://www.youtube.com/watch?v=IEf1KAcK6A8"}
                ]
        },

        //another resources array with N objects, each having 2 elements
        {subject: "React Basics", resources:
          [
            {title: "Thinking In React", url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
            {title: "React JS Basics", url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
            {title: "Thinking In React", url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
            {title: "More react Basics", url: "https://www.youtube.com/watch?v=JPT3bFIwJYA"},
            {title: "Handling Events", url: "https://facebook.github.io/react/docs/handling-events.html"},
            {title: "Stateless Functional Components", url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.hj5pmgqpy"},
            {title: "7 - 10 ReactJS", url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"},
            {title: "Function Binding", url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind"},
            {title: "Alternative Event Handlers", url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"},
            {title: "Javascript Events & Data Changes", url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"},
            {title: "Controlled Inputs", url: "https://www.youtube.com/watch?v=BvtQMxekmH0"},
            {title: "Forms Article", url: "https://facebook.github.io/react/docs/forms.html"},
            {title: "Mindspace Basics 11-14", url: "https://www.youtube.com/watch?v=Oioo0IdoEls"},
            {title: "Lifecycle Methods", url: "https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class"},
            {title: "React.Component", url: "https://facebook.github.io/react/docs/react-component.html"},
            {title: "StackO Lifecycle", url: "http://stackoverflow.com/questions/38929991/what-are-typical-use-cases-for-react-lifecycle-methods-like-componentwillreceive"},
            {title: "State & Lifecycle", url: "https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class"},


          ]
        },

        {subject: "Miscellaneous", resources:
          [
            {title: "Click to Edit Fields", url: "https://themeteorchef.com/tutorials/click-to-edit-fields-in-react"},
            {title: "Add React Boostrap", url: "https://github.com/facebookincubator/create-react-app/issues/301"},
            {title: "ReactJS.NET", url: "https://reactjs.net/getting-started/tutorial.html"},
            {title: "Pluralsight React", url: "https://www.pluralsight.com/courses/react-boilerplate-building-scalable-apps"},
            {title: "Darth Vader Analogy", url: "https://medium.freecodecamp.com/react-props-state-explained-through-darth-vaders-hunt-for-the-rebels-8ee486576492#.nkfnvgo8s"},
            {title: "Understanding Props & State", url: "https://themeteorchef.com/tutorials/understanding-props-and-state-in-react"},
            {title: "Props and passing between Components", url: "https://www.quora.com/In-React%E2%80%99s-TODOs-example-how-do-you-explain-props-and-how-they-go-from-one-component-to-another"},
            {title: "Understanding State", url: "https://thinkster.io/understanding-react-state"},
            {title: "State vs Props", url: "https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257#.t0uh9k9zm"}

          ]
        }

      ]};

    this.addNewResource = this.addNewResource.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
    this.handleTyping = this.handleTyping.bind(this);

    }

    addNewResource(subject, resource) {
      const tempState = this.state;
      tempState.resources[subject].resources.push(resource);
      this.setState(tempState);
      console.log("hey");

    }

    addNewSubject(newSubject) {
      const tempState = this.state;
      tempState.resources.push(newSubject);
      this.setState(tempState);
      console.log("hdsjdsd");
    }

    handleTyping(event) {
      this.setState({[event.target.name]: event.target.value});
      console.log(this.state);
    }


//calling render function (how do I display this) every component needs a render function
render() {
    //actual jsx (html below) that we are returning to the view
  return (
      //Subject component that has a prop called subject and setting to the first through 3rd  elements in our resources object from the app component state
  <div>
      <div>
        {this.state.resources.map((resource, index) => {
          return <Subject index={index} addResource={this.addNewResource} items={resource}/>
      })}
      </div>

      <SubjectForm addNewSubject={this.addNewSubject} />
  </div>
          )
        }


}

/* exporting app component so that we can import it into other components and files */

export default App;
