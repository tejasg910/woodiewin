import React, { useContext, useState } from "react";
import { MyContext } from "../context";

const AddTodo = () => {
  const { onHandleChange, handleSubmit, todo } = useContext(MyContext);
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write your todo
        </label>
        <textarea
          value={todo.message}
          onChange={onHandleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Add{" "}
      </button>
    </div>
  );
};

export default AddTodo;
