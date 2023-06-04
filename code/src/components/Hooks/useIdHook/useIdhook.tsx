import {useId} from 'react';

const UseIdHook = () => {
  const id = useId();

  return (
    <div className='form-container '>
      <h1>useId Hook</h1>
      <form>
        <div className='form-field'>
          <label htmlFor={id + '-firstName'}>First Name:</label>
          <input type='text' id={id + '-firstName'} name='firstName' />
        </div>
        <div className='form-field'>
          <label htmlFor={id + '-lastName'}>Last Name:</label>
          <input type='text' id={id + '-lastName'} name='lastName' />
        </div>
        <div className='form-field'>
          <label htmlFor={`${id}-email`}>Email:</label>
          <input type='email' id='email' name='email' />
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseIdHook;
