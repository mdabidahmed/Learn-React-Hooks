import {useEffect, useState} from 'react';

const UseEffectTypes = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log('Component mounted or updated - UseEffect', name, age);
  }, [name, age]);

  return (
    <div className='container'>
      <p>Use Effect Types</p>
      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='number'
          value={age}
          onChange={e => setAge(parseInt(e.target.value))}
          placeholder='Age'
        />
      </div>
    </div>
  );
};

export default UseEffectTypes;
