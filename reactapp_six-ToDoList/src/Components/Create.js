import React, { useState } from "react";
import { useAlert } from 'react-alert'
import css from "./Create.module.css";

const Create = (props) => {
    const alert = useAlert()

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const { Tasks, setTasks } = props;

    // console.log(props); 

    const submitHandler = (e) => {
        e.preventDefault();
        const task = { title, desc };
        if (!title.trim() || !desc.trim()) {
            alert.info("Empty input!!")
            return;
        }
        setTasks([...Tasks, task]);
        alert.success('Task is created!')
        settitle("");
        setdesc("");
    }

    // internal css------
    const divBg = {
        height: "200px",
        width: "400px",
        backgroundColor: "black"
    }
    // 

    return (
        <div style={divBg}>
            <form onSubmit={submitHandler}>
                <input style={{ border: "none", backgroundColor: "yellow", }} //---inlinecss
                    type="text"
                    value={title}
                    onChange={
                        (e) => { settitle(e.target.value); }}
                />
                <input style={{ border: "none", backgroundColor: "pink", }}
                    type="text"
                    value={desc}
                    onChange={
                        (e) => {
                            setdesc(e.target.value);
                        }}
                />
                <button className={css.formBtn} >onSubmit</button>
            </form>
        </div>
    )
}

export default Create