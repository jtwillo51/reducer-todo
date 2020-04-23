import React, { useReducer, useState } from "react";

import { reducer, initialState } from "../reducers/reducer";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const handleChanges = event => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        name="newTodo"
        type="text"
        onChange={handleChanges}
        placeholder="Add a new Todo!"
        value={newTodo}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo });
          setNewTodo("");
        }}
      >
        Add new todo
      </button>
      <div className="todo-list">
        {state.map(todo => {
          return (
            <h3
              className={`todo ${todo.completed ? "completed": ""}`}
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              key={todo.id}
            >
              {todo.item}
            </h3>
          );
        })}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED", payload: state });
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
