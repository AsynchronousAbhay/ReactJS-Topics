import React, { useState } from "react";
import Create from "./Components/Create";
import Show from './Components/Show';

function App() {

  const [Tasks, setTasks] = useState([]);

  return (
    <>
      <Create Tasks={Tasks} setTasks={setTasks} />
      <Show Tasks={Tasks} setTasks={setTasks} />
    </>
  )
}

export default App;
