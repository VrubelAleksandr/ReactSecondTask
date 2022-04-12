import React, { Component } from "react";
import Listitem from "./Listitem";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <>
        {todos.map((item) => {
          return (
            <Listitem
              key={item.id}
              item={item}
              changeStatus={this.props.changeStatus}
              deleteItem={this.props.deleteItem}
            />
          );
        })}
      </>
    );
  }
}
