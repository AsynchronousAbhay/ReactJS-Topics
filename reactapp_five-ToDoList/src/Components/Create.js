import React, { useState } from "react";


const Create = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const { Tasks, setTasks } = props;

    // console.log(props); 

    // const [disabled, isDisabled] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        const task = { title, desc };
        if (!e.title || !e.desc) {
            alert.info("Empty input!!")
            return;
        }
        setTasks([...Tasks, task]);
        settitle("");
        setdesc("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={title} onChange={(e) => { settitle(e.target.value); }} />
                <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value); }} />
                <button >onSubmit</button>
            </form>
        </div>
    )
}

export default Create