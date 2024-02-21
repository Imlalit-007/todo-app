import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <ChakraProvider>
      <div className='App py-5 px-2.5 sm:p-2.5 flex flex-col-reverse gap-5 sm:flex-col sm:gap-3 text-[#eee] items-center justify-end sm:justify-center'>
        <TodoApp />
      </div>
    </ChakraProvider>
  );
}

export default App;
