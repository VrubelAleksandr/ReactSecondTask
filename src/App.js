import React, { Component } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "Task 1",
          isDone: false,
        },
        {
          id: 2,
          title: "Task 2",
          isDone: false,
        },
        {
          id: 3,
          title: "Task 3",
          isDone: false,
        },
      ],
    };
  }

  addToDo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: new Date().getTime(), title, isDone: false },
      ],
    });
  };

  changeStatus = (id) => {
    const changeList = this.state.todos.map((item) => {
      return item.id === id
        ? {
            ...item,
            isDone: !item.isDone,
          }
        : item;
    });
    this.setState({
      todos: changeList,
    });
  };

  deleteItem = (id) => {
    const updateToDo = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: updateToDo,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">to do list</h1>
        <div className="list">
          <List
            todos={this.state.todos}
            changeStatus={this.changeStatus}
            deleteItem={this.deleteItem}
          />
        </div>
        <div>
          <Form addToDo={this.addToDo} />
        </div>
      </div>
    );
  }
}
