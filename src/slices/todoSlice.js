import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  try {
    if (localTodoList) {
      return JSON.parse(localTodoList);
    }
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    // Reset local storage data to a default state
    window.localStorage.setItem("todoList", JSON.stringify([]));
  }
  return [];
};


const initialValue = {
  todoList: getInitialTodo(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
