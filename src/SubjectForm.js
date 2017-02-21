import React, {Component} from 'react'

export default class SubjectForm extends Component {
  constructor(props){
    super(props)

    this.handleTyping = this.handleTyping.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
  }

  handleTyping(event){
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  /*
    This method will create a new subject object called newSubject,
    we will pass this object into our props method addSubject which we inherit
    from our Subject.js component
  */
  addNewSubject(event){
    event.preventDefault();
    const newSubject = {
      subject: this.state.subject,
      resources: []
    };
    this.props.addSubject(newSubject);
  }

  render() {
    return(
      <form>
        <input name="subject" type="text" placeholder="subject" onChange={this.handleTyping}/>
        <br></br>
        <button onClick={this.addNewSubject}>Add New Subject</button>
      </form>
    )
  }
}
