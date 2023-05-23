// ComponentB.js

import {useContext, useId} from 'react';
import DataContext from './context/DataContext';
const ComponentB = () => {
  const {sharedData}: any = useContext(DataContext);
  const passwordHintId = useId();
  return (
    <div>
      <h3>ComponentB- {sharedData}</h3>
      <h1>passwordHintId - {passwordHintId}</h1>
    </div>
  );
};

export default ComponentB;
