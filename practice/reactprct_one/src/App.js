import { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";

function App() {
  const [Tasks, setTasks] = useState([]);

  return (
    <div>
      <Create Tasks={Tasks} setTasks={setTasks}>
        Task is created!
      </Create>
      <Show Tasks={Tasks} setTasks={setTasks}></Show>
    </div>
  );
}

export default App;
