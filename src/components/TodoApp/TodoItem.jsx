import { useState, useRef } from "react";
import { Input, Checkbox, Button } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { useTodo } from "../../context/TodoContext/index.js";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [todoTitle, setTodoTitle] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const inputRef = useRef(null);
  const handleInputRef = () => {
    inputRef.current.focus();
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoTitle });
    setIsTodoEditable(false);
  };

  const toggleTodoComplete = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className='w-full flex items-center justify-start py-1.5 px-2 gap-1.5 border border-neutral-400 rounded mb-1.5 sm:mb-2.5'>
      <Checkbox
        borderColor='darkgray'
        colorScheme='green'
        size='lg'
        checked={todo.completed}
        onChange={toggleTodoComplete}
      />
      <Input
        ref={inputRef}
        type='text'
        value={todoTitle}
        readOnly={!isTodoEditable}
        onChange={e => setTodoTitle(e.target.value)}
        variant={isTodoEditable ? "outline" : "styled"}
        size={window.innerWidth > 979 ? "md" : "sm"}
        className={`bg-transparent ${
          todo.completed ? "line-through text-zinc-400 px-1" : ""
        }`}
        paddingInline={isTodoEditable ? "4px" : "5px"}
      />
      <Button
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable(prev => !prev);
        }}
        colorScheme='blue'
        size={window.innerWidth > 979 ? "md" : "sm"}
        className={`ml-auto ${todo.completed ? "opacity-50" : ""}`}
      >
        {isTodoEditable ? <CheckIcon /> : <EditIcon />}
      </Button>
      <Button
        onClick={() => deleteTodo(todo.id)}
        colorScheme='red'
        size={window.innerWidth > 979 ? "md" : "sm"}
        className='ml-auto'
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default TodoItem;
