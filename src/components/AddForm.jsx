import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      date: new Date(),
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setText("");
  };

  return (
    <form
      className="d-flex align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Ekle</button>
    </form>
  );
};

export default AddForm;
