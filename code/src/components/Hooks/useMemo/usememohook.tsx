import {useEffect, useMemo, useState} from 'react';
import TableComponent from '../../table/table';

const ExpensiveApiCallComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = 2;

  const fetchData = async () => {
    console.log('fetching data ..');

    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/gender/${id}`);
      const result = await response.json();
      console.log('fetched successfully');

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const memoizedValue = useMemo(() => data, [data]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {memoizedValue ? <TableComponent data={data} /> : 'No data available'}
        </>
      )}
    </div>
  );
};

export default ExpensiveApiCallComponent;
