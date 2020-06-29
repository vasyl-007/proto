import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    const { value } = e.target;
    // console.log("Add", value);
    this.setState({
      label: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    const { label } = this.state;
    // const { onAddItem } = this.props;
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Add new task"
          value={label}
        />
        <button
          className="btn btn-outline-secondary"
          // onClick={() => onAddItem("Hello World")}
        >
          Add task
        </button>
      </form>
    );
  }
}
