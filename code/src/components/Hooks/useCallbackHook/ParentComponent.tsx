import {useCallback, useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const increment = useCallback(() => {
    setAdd(add + 1);
  }, [add]);
  console.log('parent component rendering');
  return (
    <div className='container'>
      <h3>UseCallback Hook</h3>
      <p>Count -{count}</p>
      <button onClick={() => setCount(count + 1)}>Click - parent</button>
      {/* child component */}
      <p>Add- {add}</p>
      <ChildComponent handleClick={increment} />
    </div>
  );
};

export default ParentComponent;
