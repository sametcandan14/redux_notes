import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const ListTodos = () => {
  //stora abone olma
  const centralData = useSelector((store) => store.todoReducer);

  return (
    <div>
      {centralData.sayi === 0 && <p>Lütfen yeni bir görev ekleyiniz.</p>}

      {centralData.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
