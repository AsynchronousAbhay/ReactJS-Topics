import React from 'react'
import { useAlert } from 'react-alert';

const Show = (props) => {
    const alert = useAlert()

    const { Tasks, setTasks } = props;

    const taskdeleted = (i) => {
        const copyTask = [...Tasks];
        copyTask.splice(i, 1);
        alert.info('Task deleted!')
        setTasks(copyTask);
    }


    let tasklist = <h1>Task Not Found!</h1>;

    if (Tasks.length > 0) {
        tasklist = Tasks.map((task, indx) => {
            return (
                <li key={indx}>
                    {task.title}
                    <span onClick={() => { taskdeleted(indx) }}>❌</span>
                </li>
            )
        })
    };


    return (
        <>
            <ol>
                {tasklist}
            </ol>
        </>
    )

}

export default Show