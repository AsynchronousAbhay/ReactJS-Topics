import { useState } from "react";


function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  let [user, setUser] = useState("abhay");

  // useStateSnippet to implement state.....
  // const [first, setfirst] = useState(second)
 
  const userName = "ronni";

  const changeName = () => {
    setUser(userName)
  }

  const clickHandler = () => {
    setTime(new Date().toLocaleTimeString())
  }

  setInterval(() => {
    clickHandler()
  }, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={clickHandler}>change time</button>
      <div>
        <h2>Name: {user} </h2>
        <button onClick={changeName}>change Name</button>
      </div>
    </div>
  );
}


export default App;
