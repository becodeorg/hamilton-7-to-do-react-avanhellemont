import React from "react";
function AddToDo() {
  return (
    <div className="AddToDo">
      <input
        className="AddToDo__input"
        type="text"
        placeholder="Type a new todo"
      ></input>
      <button className="AddToDo__button">Add Todo</button>
      <hr />
    </div>
  );
}
export default AddToDo;
