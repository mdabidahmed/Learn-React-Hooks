// DataProvider.js

import {useState} from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}: any) => {
  const [sharedData, setSharedData] = useState('Initail Value');

  return (
    <DataContext.Provider value={{sharedData, setSharedData}}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
