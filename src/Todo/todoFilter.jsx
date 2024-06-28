import React from "react";

const TodoFilter = ({ filterType, changeFilterType }) => {
  return (
    <div className="w-full flex">
      <button
        type="button"
        className="btn rounded-none flex-1"
        style={{
          backgroundColor: filterType === "all" ? "orange" : "blue",
        }}
        onClick={() => changeFilterType("all")}
      >
        All
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        style={{
          backgroundColor: filterType === "pending" ? "orange" : "blue",
        }}
        onClick={() => changeFilterType("pending")}
      >
        Pending
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        style={{
          backgroundColor: filterType === "completed" ? "orange" : "blue",
        }}
        onClick={() => changeFilterType("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
