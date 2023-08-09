import React, { useContext } from "react";
import { MyContext } from "../context";
import { clearCompletedTodo, completeTodo } from "../oprations";

const ShowTodo = () => {
  const { todos, setKey } = useContext(MyContext);
  const anyTodoCompleted = todos.some((todo) => todo.completed);

  return (
    <div className="container">
      {todos &&
        todos.map((todo, index) => {
          return !todo.completed ? (
            <>
              <ul key={index} className="list-group m-2">
                <li className="list-group-item">
                  <input
                    onClick={() => {
                      completeTodo(index);
                      setKey(Math.random());
                    }}
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id={`firstCheckboxStretched${index}`}
                  />
                  <label
                    className="form-check-label stretched-link"
                    htmlFor={`firstCheckboxStretched${index}`}
                  >
                    {todo.message}
                  </label>
                </li>
              </ul>
            </>
          ) : (
            <div className="list-group m-2">
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-danger"
              >
                {todo.message}
              </a>
            </div>
          );
        })}
      {anyTodoCompleted && (
        <button
          onClick={() => {
            clearCompletedTodo();
            setKey(Math.random());
          }}
          className="m-2 btn btn-danger"
        >
          Clear Completed
        </button>
      )}
      <hr />
    </div>
  );
};

export default ShowTodo;
