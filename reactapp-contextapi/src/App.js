import React from "react";
import Create from './Components/Create';
import Show from './Components/Show';

function App() {
  return (
      <div className='container mt-5'>
        <h1 className='mt-5'>This is create component..</h1>
        <Create/>
        <h1 className='mt-5'>This is show component..</h1>
        <Show/>
      </div>
  );
}

export default App;
