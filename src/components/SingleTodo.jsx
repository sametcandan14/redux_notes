import React from "react";
import { useDispatch } from "react-redux";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };

  const handleUpdate = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });
  };
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5>{todo.text}</h5>
        <h6>{todo.isDone ? "Tamamlandı" : "Devam ediyor"}</h6>
        <p>{new Date(todo.date).toLocaleDateString()}</p>
        <button
          onClick={handleUpdate}
          className={`btn ${todo.isDone ? "btn-success" : "btn-info"}`}
        >
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </button>
        <button className="btn btn-danger mx-3" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
