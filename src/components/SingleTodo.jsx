import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

const SingleTodo = ({ todo: { id, title, detail, isDone } }) => {
  const { doneTodo, delTodo } = useTodoStore();

  const doneBtn = () => {
    doneTodo(id);
  };

  const delBtn = () => {
    if (confirm("Are you sure?")) {
      delTodo(id);
    }
  };

  const [isOpen, setOpen] = useState(false);

  const toggleOpenHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`border border-slate-700 mb-3 px-2 py-1 last:mb-0 flex items-center justify-between border-l-4 ${
        isDone ? "border-l-green-600" : "border-l-red-600"
      }`}
    >
      <div>
        <div className="select-none flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 cursor-pointer ${
              isOpen ? "rotate-90" : "rotate-0"
            } me-1 duration-150`}
            onClick={toggleOpenHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span>{title}</span>
        </div>
        <p className={`text-slate-500 ${isOpen ? null : "hidden"}`}>{detail}</p>
      </div>
      <div className="gap-2 flex">
        <button
          onClick={doneBtn}
          className={`${
            isDone ? "bg-slate-600" : null
          } bg-green-500 text-white px-2 py-0.5 rounded active:bg-green-700 duration-150`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <button
          onClick={delBtn}
          className={`bg-red-500 text-white px-2 py-0.5 rounded active:bg-green-700 duration-150`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
