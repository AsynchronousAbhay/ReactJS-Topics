import React, { useState, useRef } from 'react'

const Create = () => {
  const [Error, setError] = useState(null)
  const input = useRef(null)
  const inputChange = () => {
    // console.log(e);
    input.current.style.color = "royalblue";
    if (input.current.value.length < 4) {
      setError(true)
    }
    else {
      setError(false);
    }
  }

  return (
    <div>
      <form className='contianer mt-4'>
        <input ref={input} onChange={inputChange} type="text" placeholder='text' /><br />
        <small className="text-danger ">
          {Error && "Lorem ipsum dolor sit."}
        </small><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create