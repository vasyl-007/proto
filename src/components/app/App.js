import React, { Component } from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import ItemStatusFilter from "../itemStatusFilter";
import ItemAddForm from "../itemAddForm";

import "./App.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: "1" },
      { label: "Make Awesome App", important: true, id: "2" },
      { label: "Have a lunch", important: false, id: "3" },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, inx);
      const after = todoData.slice(inx + 1);
      const newArray = [...before, ...after];
      return {
        todoData: newArray,
      };
    });
  };
  //   deleteItem = (id) => {
  //     this.setState(({ todoData }) => {
  //       const inx = todoData.findIndex((el) => el.id === id);
  //       console.log(inx);
  //       todoData.splice(inx, 1);   // mutate data - very bad practice
  //       return {
  //         todoData: todoData,
  //       };
  //     });
  //   };

  addItem = (text) => {
    console.log("Clicked", text);
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };
    // this.setState(({ todoData }) => {
    //   const newArr = [newItem, ...todoData];
    //   return { todoData: newArr };
    // });
    this.setState(({ todoData }) => {
      return { todoData: [newItem, ...todoData] };
    });
    // this.setState(({ todoData }) => [newItem, ...todoData]);
  };

  onToggleImportant = (id) => {
    console.log("Toggle important", id);
  };
  onToggleDone = (id) => {
    console.log("Toggle done", id);
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

// const App = () => {
//   const todoData = [
//     { label: "Drink Coffee", important: false, id: "1" },
//     { label: "Make Awesome App", important: true, id: "2" },
//     { label: "Have a lunch", important: false, id: "3" },
//   ];

//   return (
//     <div className="todo-app">
//       <AppHeader toDo={1} done={3} />
//       <div className="top-panel d-flex">
//         <SearchPanel />
//         <ItemStatusFilter />
//       </div>

//       <TodoList todos={todoData} onDeleted={(id) => console.log("Del", id)} />
//     </div>
//   );
// };

// export default App;
