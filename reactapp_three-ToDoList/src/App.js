import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();
      console.log({ title, desc });
      setTitle("");
      setDesc("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" placeholder='desc' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
