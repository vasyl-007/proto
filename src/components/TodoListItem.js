import React from "react";
import "./TodoListItem.css";

export const TodoListItem = ({ label, important = false }) => {
  const styles = {
    color: important ? "tomato" : "black",
  };
  return (
    <span className="todo-list-item" style={styles}>
      {label}
    </span>
  );
};
