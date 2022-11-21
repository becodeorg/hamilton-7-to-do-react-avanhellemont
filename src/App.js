import React from "react";
import Banner from "./components/banner";
import AddToDo from "./components/addToDo";
import ToDoList from "./components/ToDoList";
import "./sass/banner.scss";
import "./sass/addToDo.scss";
import "./sass/toDoList.scss";

function App() {
  return (
    <body className="ToDoApp">
      <header className="ToDoApp__header">
        <Banner />
      </header>
      <main className="ToDoApp__section">
        <AddToDo />
        <ToDoList />
      </main>
    </body>
  );
}

export default App;
