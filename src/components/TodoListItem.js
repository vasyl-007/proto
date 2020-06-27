import React from "react";

export const TodoListItem = ({ label, important = false }) => {
  const styles = {
    color: important ? "tomato" : "black",
  };
  return <span style={styles}>{label}</span>;
};
