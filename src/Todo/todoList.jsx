import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todoList, updateTodo, deleteTodo, status }) => {
  console.log("todo list");
  return (
    <ul className="w-full m-0 p-0 flex-1 overflow-auto">
      {todoList.map((item, i) => {
        const deleteStatus = status.find((x) => x.id === item.id);
        return (
          <TodoItem
            key={item.id}
            item={item}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            status={deleteStatus}
            isLast={i + 1 === todoList.length}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
