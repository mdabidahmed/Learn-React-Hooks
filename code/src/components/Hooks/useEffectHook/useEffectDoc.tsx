import {useEffect} from 'react';
export const dependency1 = 'value1'; // ignore
export const dependency2 = 'value1'; // ignore
export const dependencyArray = ['value1']; //ignore
const useEffectDocComponent = () => {
  //?------------------------------------------------------------------------------------------?//
  //Todo: The useEffect hook in React can be used in different ways depending on the effect you want to achieve. Here are the main types of useEffect usage:
  //?------------------------------------------------------------------------------------------?//
  // *** 1. Basic useEffect: The most common usage of useEffect is to perform side effects or actions when a component mounts, updates, or unmounts. It takes a callback function as its first argument and an optional array of dependencies as the second argument

  useEffect(() => {
    // !Perform side effects or actions here
    //! This effect runs after every render
  });
  //?------------------------------------------------------------------------------------------?//
  // *** 2. Effect with Dependencies: You can specify dependencies as the second argument to useEffect. The effect will only be triggered when one or more of the dependencies change.

  useEffect(() => {
    // !Perform side effects or actions here
    // !This effect runs when the dependencies change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency1, dependency2]);
  //?------------------------------------------------------------------------------------------?//
  // *** 3. Effect Cleanup: If the effect returns a cleanup function, it will be executed when the component unmounts or before the effect is re-run.

  useEffect(() => {
    // Perform side effects or actions here

    return () => {
      //! Cleanup function
      //! This runs before the component unmounts or before the effect is re-run
    };
  });
  //?------------------------------------------------------------------------------------------?//
  // *** 4.  Effect Runs Once (on Mount): By providing an empty dependency array, the effect will only run once, on component mount.

  useEffect(() => {
    //! Perform side effects or actions here
    // !This effect runs only once on component mount
  }, []);
  //?------------------------------------------------------------------------------------------?//
  // *** 5. Effect Dependencies as an Array: Instead of specifying individual dependencies, you can use an array of dependencies to trigger the effect when any of the dependencies change.

  useEffect(() => {
    //! Perform side effects or actions here
    // !This effect runs when any dependency changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencyArray]);
  //?------------------------------------------------------------------------------------------?//
  /*
  
  
  
  
  
  
  
  
  
  
  
  
  **/
  return <div></div>;
};

export default useEffectDocComponent;
