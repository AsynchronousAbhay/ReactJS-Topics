import React, { useState } from "react";
import Create from "./Components/Create";
import Show from './Components/Show';

function App() {

  const [Tasks, setTasks] = useState([]);

  return (
    <>
      <div>
        <Create Tasks={Tasks} setTasks={setTasks} >
          <p>This is create component information.</p>
        </Create>
        <Show Tasks={Tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App;
