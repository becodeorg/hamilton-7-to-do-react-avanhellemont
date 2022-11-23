import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LSKEY = "MyTodoApp";

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
export default function AddToDo() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = [...todos];

    const nom = inputRef.current.value;
    newTodo.push({ id: uuidv4(), nom: nom });
    setTodos(newTodo);
  };

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]); // <<- look here

  useEffect(() => {
    if (localStorage.getItem(LSKEY)) {
      const newList = JSON.parse(localStorage.getItem(LSKEY));
      setTodos(newList);
    }
  }, []);

  //affichage
  return (
    <>
      <form className="AddToDo" action="submit" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="AddToDo__input"
          type="text"
          placeholder="Type a new todo"
        ></input>
        <button className="AddToDo__button">Add Todo</button>
      </form>

      <div className="ToDoList">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Checkbox />
              {todo.nom}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
