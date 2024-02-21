import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";

import { useTodo, TodoProvider } from "../../context/TodoContext/index.js";

function TodoApp() {
  let {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    findActiveTodo,
    findCompletedTodo,
  } = useTodo();

  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  //Adding the Todo
  addTodo = todo => {
    setAllTodos(prev => [...prev, { id: Date.now(), ...todo }]);
  };

  //Updating the todo
  updateTodo = (id, todo) => {
    setAllTodos(prev =>
      prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  //Deleting the todo
  deleteTodo = id => {
    setAllTodos(prev => allTodos.filter(todo => todo.id !== id));
  };

  //toggleComplete the todo
  toggleComplete = id => {
    setAllTodos(prev =>
      prev.map(prevTodo =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  //find active todo
  findActiveTodo = completed => {
    const a = allTodos.filter(todo => todo.completed !== true);
    setActiveTodos([]);
    a.forEach(item => activeTodos.push(item));
    console.log(activeTodos);
  };

  //find completed todo
  findCompletedTodo = completed => {
    if (completed) {
      const a = allTodos.filter(todo => todo.completed === completed);
      setCompletedTodos([]);
      a.forEach(item => completedTodos.push(item));
      console.log(completedTodos);
    }
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList && todoList.length > 0) {
      setAllTodos(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        findActiveTodo,
        findCompletedTodo,
      }}
    >
      <div className='sm:w-[640px] sm:p-5 basis-full min-w-[340px] flex flex-col border border-neutral-400 rounded sm:rounded-xl p-2.5 relative overflow-auto max-h-screen text-white backdrop-blur'>
        <div className='fixed top-0 left-2/4 translate-x-[-50%] z-10 w-full rounded-t px-2.5 sm:px-5 py-6 sm:py-10 flex flex-col items-center gap-10 text-white'>
          <h1 className='tracking-widest text-5xl font-[800] text-[#eee] w-full text-center sm:text-6xl'>
            TODO
          </h1>
          <TodoForm />
        </div>

        <div className='flex flex-col items-center overflow-auto mt-44 sm:mt-52'>
          {allTodos && allTodos.length
            ? allTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
              ))
            : null}
        </div>
      </div>
      {/*
      <TodoInfo
        allTodos={allTodos}
        completedTodoData={findCompletedTodo}
        activeTodoData={findActiveTodo}
      />
      */}
    </TodoProvider>
  );
}

export default TodoApp;
