import { useState } from "react";
import { Input, Button, FormControl } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodo } from "../../context/TodoContext/index.js";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-full'
      >
        <FormControl className='w-full flex items-center justify-center gap-1.5'>
          <Input
            value={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder='Add your todo'
            required={true}
            border='1px solid darkgray'
            borderRadius='4px'
            size={window.innerWidth > 979 ? "lg" : "md"}
          />
          <Button
            type='submit'
            borderRadius='4px'
            size={window.innerWidth > 979 ? "lg" : "md"}
            colorScheme='green'
          >
            <AddIcon />
          </Button>
        </FormControl>
      </form>
    </>
  );
}

export default TodoForm;
