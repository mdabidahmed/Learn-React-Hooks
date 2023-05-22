function GrandChildComponent({data}: any) {
  return (
    <div>
      {/* GrandChildComponent needs access to the "data" prop */}
      <h3>GrandChildComponent</h3>
      <p>{data}</p>
    </div>
  );
}

function ChildComponent({data}: any) {
  return <GrandChildComponent data={data} />;
}

function ParentComponent({data}: any) {
  return <ChildComponent data={data} />;
}

function PropDrilling() {
  const data = 'Hello, prop drilling!';
  return <ParentComponent data={data} />;
}

export default PropDrilling;
