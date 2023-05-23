import {useState} from 'react';

const UseStateDoc = () => {
  ///TODO: The useState() hook is used in React functional components when you need to introduce and manage state within the component. State allows you to store and manage data that can change over time, such as user input, component configuration, or any other dynamic values.
  // ?-------------------------------------------?//

  //** Here are some scenarios where you might need to use the useState() hook:

  //! Boolean state
  const [isActive, setIsActive] = useState(false);

  //! Number state
  const [count, setCount] = useState(0);

  //! String state
  const [name, setName] = useState('');

  // ! Object state
  const [person, setPerson] = useState({name: 'John', age: 25});

  //! 5. Array state
  const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);

  return <div></div>;
};

export default UseStateDoc;
