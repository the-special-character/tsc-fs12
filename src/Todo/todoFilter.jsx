import React from "react";
import { Button } from "../components/ui/button";

const TodoFilter = ({ filterType, onChangeFilterType }) => {
  return (
    <div className="w-full flex">
      <Button
        variant={filterType === "all" ? "default" : "secondary"}
        onClick={() => onChangeFilterType("all")}
        className="flex-1 rounded-none"
      >
        All
      </Button>
      <Button
        variant={filterType === "pending" ? "default" : "secondary"}
        onClick={() => onChangeFilterType("pending")}
        className="flex-1 rounded-none"
      >
        Pending
      </Button>
      <Button
        variant={filterType === "completed" ? "default" : "secondary"}
        onClick={() => onChangeFilterType("completed")}
        className="flex-1 rounded-none"
      >
        Completed
      </Button>
    </div>
  );
};

export default TodoFilter;
