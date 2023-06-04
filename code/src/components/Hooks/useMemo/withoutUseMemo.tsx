import {useState} from 'react';

const MyComponentWithoutMemo = () => {
  const [countExpensiveCal, setCountExpensiveCal] = useState(0);
  const [count, setCount] = useState(0);

  const expensiveComputation = () => {
    for (let i = 0; i < 2000000000; i++) {
      // Some complex calculation
    }
    return countExpensiveCal * 2;
  };

  const startTime = performance.now();

  const result = expensiveComputation();

  const endTime = performance.now();
  const timeTaken = endTime - startTime;

  console.log(`with useMemo Time taken: ${timeTaken} milliseconds`);

  return (
    <div className='card-container'>
      <div className='card-header'>My Component Without useMemo()</div>
      <div className='card'>
        <div className='column'>
          <h3>without useMemo counter</h3>
          <p>{result}</p>
        </div>
        <div className='column'>
          <h3>Counter:</h3>
          <p>{count}</p>
        </div>
        <div className='column'>
          <h3>Time Taken</h3>
          <p>{timeTaken} ms</p>
        </div>
        <div>
          {/* Button for Expensive Calculation - without useMemo() hook */}
          <button onClick={() => setCountExpensiveCal(countExpensiveCal + 1)}>
            Expensive Calculation
          </button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default MyComponentWithoutMemo;
