// ComponentB.js

import {useContext} from 'react';
import DataContext from './context/DataContext';

const ComponentB = () => {
  const {sharedData}: any = useContext(DataContext);
  return (
    <div>
      <h3>ComponentB- {sharedData}</h3>
    </div>
  );
};

export default ComponentB;
