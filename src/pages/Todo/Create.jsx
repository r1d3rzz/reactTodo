import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTodoStore from "../../store/useTodoStore";

const Create = () => {
  const { addTodo } = useTodoStore();
  const titleRef = useRef("");
  const detailRef = useRef("");
  const navigate = useNavigate();

  const addBtn = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: titleRef.current.value,
      detail: detailRef.current.value,
      isDone: false,
    };
    addTodo(data);
    titleRef.current.value = "";
    detailRef.current.value = "";
    navigate("/");
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title">Title</label>
        <br />
        <input
          className="border border-slate-500 w-full px-2 py-1 rounded"
          type="text"
          id="title"
          placeholder="Enter Title"
          required
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="detail">Detail</label>
        <br />
        <textarea
          className="border border-slate-500 w-full px-2 py-1 rounded"
          id="detail"
          placeholder="Enter Detail"
          ref={detailRef}
          required
        ></textarea>
      </div>
      <div className="text-end">
        <button
          onClick={addBtn}
          className="bg-blue-500 px-5 py-1 text-white active:bg-blue-600 duration-150 me-2 rounded"
        >
          Add
        </button>
        <Link
          to={"/"}
          className="bg-red-500 px-5 py-1 text-white active:bg-red-600 duration-150 rounded"
        >
          Back
        </Link>
      </div>
    </form>
  );
};

export default Create;
