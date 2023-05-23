import {useState} from 'react';

const UseStateComponent = () => {
  const [todos, setTodos] = useState(['task 1', 'task 2', 'task 3']);
  const addTodo = () => {
    setTodos([...todos, 'new todo']);
  };
  return (
    <div className='container'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default UseStateComponent;
