import React from "react";
import { useAlert } from 'react-alert';
import css from "./Show.module.css";


const Show = (props) => {
    const alert = useAlert()

    const { Tasks, setTasks } = props;

    console.log(Tasks);

    const taskdelete = (i) => {
        const copytask = [...Tasks];
        copytask.splice(i, 1);
        setTasks(copytask);
        alert.show('Task removed!')
    }

    let tasklist = <h1 className={css.msgCss}>No task found!</h1>;

    if (Tasks.length > 0) {
        tasklist = Tasks.map((task, indx) => {
            return (
                <li className={css.liCss} key={indx}>{task.title} <span className={css.crossCss} onClick={() => { taskdelete(indx) }}>❌</span></li>
            )
        })
    }

    return (
        <ol className={css.olCss}>
            {tasklist}
        </ol>
    )
}

export default Show