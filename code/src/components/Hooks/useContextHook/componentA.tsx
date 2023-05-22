// ComponentA.js
import {useContext} from 'react';
import DataContext from './context/DataContext';

const ComponentA = () => {
  const {sharedData, setSharedData}: any = useContext(DataContext);
  const updateData = () => {
    setSharedData('Update value from component A');
  };
  return (
    <div>
      <h3>ComponentA: {sharedData}</h3>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default ComponentA;
