import React from "react";
import { useSelector } from "react-redux";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  // const sortedTodoList = [...todoList];
  // sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      <h1>App Content</h1>
    </div>
  );
};

export default AppContent;
