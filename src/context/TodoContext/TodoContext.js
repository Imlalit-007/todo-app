import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello",
      completed: false
    }
  ],
  addTodo: todo => {},
  updateTodo: (id, todo) => {},
  deleteTodo: id => {},
  toggleComplete: id => {},
  findActiveTodo: completed => {},
  findCompletedTodo: (completed) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
