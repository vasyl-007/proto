import React, { Component } from "react";

import "./TodoListItem.css";

export default class TodoListItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false,
  //   };
  // }
  // state = {
  //   done: false,
  //   important: false,
  // };
  //  constructor() {
  //    super();
  //    this.onLabelClick = () => {         // 2-ой вариант через constructor
  //      console.log(`Done: ${this.props.label}`);
  //    };
  //  }
  // onLabelClick() {
  //   console.log(`Done: ${this.props.label}`);
  // }
  // onLabelClick = () => {
  //   //  3-ий вариант через публичные поля классов - class fields + arrow func - the best
  //   console.log(`Done: ${this.props.label}`);
  //   this.setState(({ done }) => {
  //     return {
  //       done: !done,
  //     };
  //   });
  // };
  // onMarkImportant = () => {
  //   this.setState((state) => {
  //     return {
  //       important: !state.important,
  //     };
  //   });
  // };
  // onMarkImportant = () => {
  //   this.setState({
  // important: !this.state.important,      // асинхронных, поэтому может не успеть обновиться от последних изменений
  //   });
  // };

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;
    // const { done, important } = this.state;
    // const style = {
    //   color: important ? "steelblue" : "black",
    //   fontWeight: important ? "bold" : "normal",
    // };
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          // style={style}
          onClick={onToggleDone}
          // onClick={this.onLabelClick.bind(this)}    // 1-ый вариант bind - при каждом клике создается новая функция
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
