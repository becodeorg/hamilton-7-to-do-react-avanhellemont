import React, { useState } from "react";
function Checkbox() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);

    if (event.target.checked) {
      //si la cible de l'évenement est check
      event.target.closest("li").style.textDecoration = "line-through"; //closest = proche
    } else event.target.closest("li").style.textDecoration = "none";
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
  const [todos /*, setTodos*/] = useState(initialTodos);

  //event.target.closest('li').rajoute ce que tu veux içi

  return (
    <div className="ToDoList">
      <ul>
        {todos.map((todo) => (
          <li>
            <Checkbox />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
// 2
