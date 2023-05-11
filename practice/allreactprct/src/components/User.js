import React, { useState, useRef } from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom";

const User = () => {
  const [Error, setError] = useState(false);
  const input = useRef(null);
  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    // console.log(input.current);
    // ----to data to database...
    console.log('Submitted!');
    navigate("/About");
  }

  const onInputChange = () => {
    input.current.style.color = "yellow";
    if (input.current.value.length < 4) {
      setError(true);
    }
    else {
      setError(false);
    }
  }

  return (
    <div>
      <form className='form-control' onSubmit={onsubmit}>
        <input className='form-control'
          ref={input} onChange={onInputChange} type="username" placeholder='username'
        />
        <small className='text-danger'>
          {Error && "Lorem ipsum dolor sit amet consectetur."}
        </small>
        <input className='form-control' type="password" placeholder='password' />
        <button>submit</button>
      </form>
      <hr />
      <>
        <ol>
          <li>
            <Link to={"/user/Abhay"}>Abhay</Link>
          </li>
          <li>
            <Link to={"/user/rohit"}>rohit</Link>
          </li>
          <li>
            <Link to={"/user/aman"}>aman</Link>
          </li>
        </ol>
      </>
      <Outlet />
    </div>
  )
}

export default User