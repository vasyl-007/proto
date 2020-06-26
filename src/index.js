import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const TodoList = () => {
  return (
    <ul>
      <li>Refresh Reach</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h2>Task Manager</h2>;
};

const SearchPanel = () => {
  return <input placeholder="Search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const el = React.createElement("h2", null, "Hello React Yoohoo!");
// console.log("el", el);
// ReactDOM.render(el, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
