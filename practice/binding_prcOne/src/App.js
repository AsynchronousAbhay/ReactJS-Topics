import { useState } from "react";

function App() {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ title, desc });
  }

  let changeHandler = (e) => {
    settitle(e.target.value)
  }

  let changeHandlerdesc = (e) => {
    setdesc(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        {/* <input type="text" placeholder="title" value={title} onChange={(e) => {
          settitle(e.target.value);
        }} /> */}
        <input type="text" placeholder="title" value={title} onChange={changeHandler} />
        {/* <input type="text" placeholder="description" value={desc} onChange={(e) => {
          setdesc(e.target.value);
        }} /> */}
        <input type="text" placeholder="description" value={desc} onChange={changeHandlerdesc} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
