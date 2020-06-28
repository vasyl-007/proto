import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onAddItem("Hello World")}
        >
          Add new task
        </button>
      </div>
    );
  }
}
