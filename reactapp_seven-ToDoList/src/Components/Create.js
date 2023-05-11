import React, { useState } from "react";
import { useAlert } from 'react-alert'
import css from "./Create.module.css";

const Create = (props) => {
    const alert = useAlert()

    const [title, settitle] = useState("Title")
    const [desc, setdesc] = useState("Desc...")
    const { Tasks, setTasks } = props;

    console.log(props); 

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

    return (
        <div className={css.formDiv}>
            <form className={css.formCss} onSubmit={submitHandler}>
                <h1>Create Task...</h1>
                <input className={css.inputCss}
                    type="text"
                    value={title}
                    onChange={
                        (e) => { settitle(e.target.value); }}
                />
                <input className={css.inputCss}
                    type="text"
                    value={desc}
                    onChange={
                        (e) => {
                            setdesc(e.target.value);
                        }}
                />
                <button>onSubmit</button>
            </form>
        </div>
    )
}

export default Create