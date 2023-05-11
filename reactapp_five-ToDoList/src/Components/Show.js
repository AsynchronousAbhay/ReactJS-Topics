import React from "react";

const Show = (props) => {

    const { Tasks, setTasks } = props;

    console.log(Tasks);

    const taskdelete = (i) => {
        const copytask = [...Tasks];
        copytask.splice(i, 1);
        setTasks(copytask);
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