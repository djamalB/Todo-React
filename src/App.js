import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        completed: false
      }
      setTodos([...todos,newItem])
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  };

  const handkeToogle = (id) => {
setTodos([
  ...todos.map((todo) => todo.id === id ? {...todo,complete: !todo.complete} : {...todo})
])
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toogleTask={handkeToogle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
