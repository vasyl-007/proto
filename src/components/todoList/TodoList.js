import React from "react";

import TodoListItem from "../todoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      // <div key={id}>
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
      // </div>
    );
  });

  return (
    <div>
      <ul className="list-group todo-list">{elements}</ul>
    </div>
  );
};

export default TodoList;
