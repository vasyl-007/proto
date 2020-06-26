import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const TodoList = () => {
  const items = ["Refresh React", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h2>Task Manager</h2>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "22px",
  };
  return (
    <input placeholder={searchText} style={searchStyle} disabled={false} />
  );
};

const App = () => {
  const loginBox = <p>Log in</p>;
  const isLoggedIn = true;
  const welcomeBox = <p>Welcome Back</p>;
  const value = "<script>alert('')</script>"; //* не тормозит работу в JSX (в HTML код бы сработал) /*
  return (
    <div>
      {value}
      {isLoggedIn ? welcomeBox : loginBox}
      <span>{new Date().toString()}</span>
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
