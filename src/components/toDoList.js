import React, { useState } from "react";
function Checkbox() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <input
      type="checkbox"
      className={isActive ? "checked" : "not-checked"}
      onClick={handleClick}
    ></input>
  );
}

function ToDoList() {
  const initialTodos = ["Read a book", "Develop my projects"];
  const [todos/*, setTodos*/] = useState(initialTodos);
  return (
    <div className="ToDoList">
      <ul>
        {todos.map((todo) => (
          <li>
            <Checkbox />{todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
// 2
