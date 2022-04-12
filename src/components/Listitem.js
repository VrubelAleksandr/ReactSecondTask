import React, { Component } from "react";

export default class Listitem extends Component {
  onDeleteItem = (e) => {
    e.stopPropagation();
    this.props.deleteItem(this.props.item.id);
  };
  render() {
    const { item } = this.props;
    return (
      <>
        <div
          className={`item-list ${item.isDone ? "item-done" : ""} `}
          onClick={() => this.props.changeStatus(item.id)}
        >
          {item.title}
          <button onClick={this.onDeleteItem} className="btn-delete">
            Delete
          </button>
        </div>
      </>
    );
  }
}
