import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos }) => {
  const firstElement = (
    <li>
      <TodoListItem label={todos[0].label} important={todos[0].important} />
    </li>
  );
  return (
    <div>
      {firstElement}
      <li>
        <TodoListItem label={todos[1].label} important={todos[1].important} />
      </li>
      <li>
        <TodoListItem label={todos[2].label} important={todos[2].important} />
      </li>
    </div>
  );
};
