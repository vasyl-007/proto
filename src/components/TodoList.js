import React from "react";
import "./TodoList.css";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...otherProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...otherProps} />
        {/* <TodoListItem label={item.label} important={item.important} /> */}
      </li>
    );
  });
  //   const elements = todos.map((item) => {
  //     return (
  //       <li key={item.id}>
  //         <TodoListItem {...item} />
  //         {/* <TodoListItem label={item.label} important={item.important} /> */}
  //       </li>
  //     );
  //   });

  return <ul className="list-group todo-list">{elements}</ul>;
};
