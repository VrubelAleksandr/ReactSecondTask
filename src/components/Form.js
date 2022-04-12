import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      newTitle: "",
    };
  }

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      newTitle: e.target.value,
    });
  };

  submitlHandler = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.newTitle);
    this.setState({
      newTitle: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.submitlHandler}>
        <input
          type="text"
          value={this.state.newTitle}
          className="input-task"
          placeholder=""
          onChange={this.changeHandler}
        />
        <button className="btn">Add ToDo</button>
      </form>
    );
  }
}
