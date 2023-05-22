// import ParentComponent from './components/Hooks/useCallbackHook/ParentComponent';

import ComponentA from './components/Hooks/useContextHook/componentA';
import ComponentB from './components/Hooks/useContextHook/componentB';

function App() {
  return (
    <div className='App'>
      {/* <ParentComponent /> */}
      {/* <PropDrilling /> */}
      <ComponentA />
      <ComponentB />
    </div>
  );
}
export default App;
