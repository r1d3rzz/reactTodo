import React from "react";
import useTodoStore from "../store/useTodoStore";
import SingleTodo from "./SingleTodo";

const Todos = () => {
  const { todos } = useTodoStore();
  return (
    <>
      <div className="flex justify-between items-center text-slate-400">
        <div className="text-blue-950">Todos</div>
        <div className="text-sm">
          Total: {todos.length} | Done:{" "}
          {todos.filter((todo) => todo.isDone).length}
        </div>
      </div>
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
