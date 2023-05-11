import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [Tasks, setTasks] = useState([]);

  const [disabled, isDisabled] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log({ title, desc });
    const task = { title, desc };
    setTasks([...Tasks, task]);
    settitle("");
    setdesc("");
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  }
  console.log(Tasks);

  const taskdelete = (i) => {
    const copytask = [...Tasks];
    copytask.splice(i, 1);
    setTasks(copytask);
  }

  let tasklist = <h1>No task found!</h1>;

  if (Tasks.length > 0) {
    tasklist = Tasks.map((task, indx) => {
      return (
        <li key={indx}>{task.title} <span onClick={() => { taskdelete(indx) }}>❌</span></li>
      )
    })
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={(e) => { settitle(e.target.value); }} />
        <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value); }} />
        <button disabled={!title}>onSubmit</button>
      </form>
      <div>
        <ol>
          {tasklist}
        </ol>
      </div>
      [1,2,3,4,5,6]
    </>
  )
}

export default App