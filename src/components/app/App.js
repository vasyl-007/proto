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
      this.createTodoItem("Make a smile - your first task)"),
      this.createTodoItem("Drink Coffee - the second one"),
      this.createTodoItem("Start typing your own tasks"),
    ],
    // todoData: [
    //   { label: "Drink Coffee", important: false, id: "1" },
    //   { label: "Make an Awesome App", important: true, id: "2" },
    //   { label: "Have a lunch", important: false, id: "3" },
    // ],
    term: "",
    filter: "all", // All, active, done
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
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      return { todoData: [newItem, ...todoData] };
    });
  };
  //   addItem = (text) => {
  //     console.log("Clicked", text);
  //     const newItem = {
  //       label: text,
  //       important: false,
  //       id: this.maxId++,
  //     };
  //     // this.setState(({ todoData }) => {
  //     //   const newArr = [newItem, ...todoData];
  //     //   return { todoData: newArr };
  //     // });
  //     this.setState(({ todoData }) => {
  //       return { todoData: [newItem, ...todoData] };
  //     });
  //     // this.setState(({ todoData }) => [newItem, ...todoData]);
  //   };

  onToggleImportant = (id) => {
    console.log("Toggle important", id);
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };
  //   onToggleImportant = (id) => {
  //     console.log("Toggle important", id);
  //     this.setState(({ todoData }) => {
  //       return {
  //         todoData: todoData.map((item) =>
  //           item.id === id ? { ...item, important: !item.important } : item
  //         ),
  //       };
  //     });
  //   };
  //   onToggleDone = (id) => {
  //     console.log("Toggle done", id);
  //     this.setState(({ todoData }) => {
  //       const inx = todoData.findIndex((el) => el.id === id);
  //       const oldItem = todoData[inx];
  //       const newItem = { ...oldItem, done: !oldItem.done };
  //       const newArray = [
  //         ...todoData.slice(0, inx),
  //         newItem,
  //         ...todoData.slice(inx + 1),
  //       ];
  //       return {
  //         todoData: newArray,
  //       };
  //     });
  //   };
  onToggleDone = (id) => {
    // console.log("Toggle done", id);
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const inx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[inx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)];
  }

  filterTodos = (term) => {
    this.setState({ term });
  };

  search = (items, term) => {
    if (term.trim() === "") {
      //   return this.state.todoData;
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().includes(term.toLowerCase());
      // return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  filterOptions = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { todoData, term, filter } = this.state;
    // const term = this.state.term.toLowerCase();
    const visibleItems = this.filterOptions(
      this.search(todoData, term),
      filter
    );
    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          {/* <SearchPanel /> */}
          <SearchPanel onFilterTodos={this.filterTodos} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <ItemAddForm onAddItem={this.addItem} />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
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
