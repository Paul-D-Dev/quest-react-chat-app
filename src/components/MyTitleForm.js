import React, { Component } from "react";

const IGNORE = "\*";

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Awesome Title" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({title: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label htmlFor="title">Title :</label>
        <input 
          id="title" 
          type="text" 
          value={this.state.title.includes(IGNORE) ? '' : this.state.title} 
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default MyTitleForm;
