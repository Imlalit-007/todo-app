import { useState, useEffect } from "react";
import { useTodo } from "../../context/TodoContext/index";

function TodoInfo({ allTodos, activeTodoData, completedTodoData }) {
  const [todoActive, setTodoActive] = useState(false);
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleActiveTodo = () => {
    activeTodoData(todoActive);
    setTodoActive(!todoActive);
  };

  const handleCompletedTodo = () => {
    completedTodoData(!todoCompleted);
    setTodoCompleted(!todoCompleted);
  };

  return (
    <div className='w-[340px] sm:w-[640px] flex items-center justify-between border border-neutral-400 rounded sm:rounded-xl h-28 sm:h-16 text-white backdrop-blur px-2.5 py-1.5 sm:py-0 sm:px-4 flex-wrap lg:py-2'>
      <p className='text-sm sm:text-md order-3 sm:order-1'>
        {allTodos.length} items left
      </p>
      <form className='w-full sm:w-52 sm:h-14 overflow-hidden flex items-center relative order-1 sm:order-2'>
        <input
          type='search'
          placeholder='search'
          className='px-2.5 py-1.5 w-full border border-neutral-400 rounded bg-transparent outline-0'
        />
        <button
          type='submit'
          className='absolute right-2.5'
        ></button>
      </form>
      <div className='flex items-center justify-center gap-2 text-sm sm:text-base order-2 sm:order-3'>
        <button
          
          className='px-2 rounded bg-white text-zinc-700 py-0.5'
        >
          All
        </button>
        <button
          onClick={handleActiveTodo}
          className={`px-2 py-0.5 border border-neutral-400 rounded ${
            todoActive ? "bg-white text-zinc-700 border-0 py-0.5" : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={handleCompletedTodo}
          className={`px-2 py-0.5 border border-neutral-400 rounded ${
            todoCompleted ? "bg-white text-zinc-700 border-0 py-0.5" : ""
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoInfo;
