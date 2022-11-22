import React, { useRef, useState } from "react";

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
  const initialTodos = ["Read a book", "Develop my projects"]
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = [...todos];

    const task = inputRef.current.value;
    newTodo.push(task);
    setTodos(newTodo);
  };
  
  //affichage
  return (
<>
    <form className="AddToDo" action="submit" onSubmit={handleSubmit}>
      <input ref={inputRef}
        className="AddToDo__input"
        type="text"
        placeholder="Type a new todo"
      ></input>
      <button className="AddToDo__button" >
        Add Todo
      </button>
    </form>

     <div className="ToDoList">
     <ul>
       {todos.map((todo, index) => (
         <li key={index}>
           <Checkbox />
           {todo}
         </li>
       ))}
     </ul>
   </div>
   </>
  );
};