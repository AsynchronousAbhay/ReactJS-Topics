import React, { useState } from 'react'
import { useAlert } from 'react-alert'

const Create = (props) => {

    console.log(props);

    const alert = useAlert()

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const { Tasks, setTasks } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const Task = { title, desc };
        if (!title.trim() || !desc.trim()) {
            alert.error('Empty input!!');
            return;
        }
        setTasks([...Tasks, Task]);
        alert.success('Task created!');
        settitle("");
        setdesc("");
    }

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="desc"
                        value={desc}
                        onChange={(e) => setdesc(e.target.value)}
                    />
                    <button>Add task</button>
                </form>
            </div>
        </>
    );

}

export default Create