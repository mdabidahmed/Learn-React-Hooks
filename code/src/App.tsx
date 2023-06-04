import MyComponentWithMemo from './components/Hooks/useMemo/withUseMemo';
import MyComponentWithoutMemo from './components/Hooks/useMemo/withoutUseMemo';

function App() {
  return (
    <div className='App'>
      {/* <ParentComponent /> */}
      {/* <PropDrilling /> */}
      {/* <ComponentA />
      <ComponentB /> */}
      {/* <UseEffectTypes /> */}
      {/* <UseStateComponent /> */}
      {/* <ExpensiveApiCallComponent /> */}
      <MyComponentWithoutMemo />
      <MyComponentWithMemo />
    </div>
  );
}
export default App;
