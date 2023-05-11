import React from "react";
import { useAlert } from 'react-alert';
import "./Show.css";

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

    let tasklist = <h1>No task found!</h1>;

    if (Tasks.length > 0) {
        tasklist = Tasks.map((task, indx) => {
            return (
                <li key={indx}>{task.title} <span onClick={() => { taskdelete(indx) }}>❌</span></li>
            )
        })
    }

    return (
        <ol>
            {tasklist}
        </ol>
    )
}

export default Show