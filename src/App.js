import React from "react";
import Banner from "./components/banner";
import AddToDo from "./components/addToDo";
import "./sass/banner.scss";
import "./sass/addToDo.scss";
import "./sass/toDoList.scss";

function App() {
  return (
    <div className="ToDoApp">
      <header className="ToDoApp__header">
        <Banner />
      </header>
      <main className="ToDoApp__section">
        <AddToDo />
      </main>
    </div>
  );
}

export default App;
