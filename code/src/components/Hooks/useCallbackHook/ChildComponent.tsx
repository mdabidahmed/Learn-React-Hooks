import {memo} from 'react';

const ChildComponent = ({handleClick}: any) => {
  console.log('child component rendering');

  return <button onClick={handleClick}>Add - child</button>;
};

export default memo(ChildComponent);
