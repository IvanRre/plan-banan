import React,{ useState } from "react";
import api from "../api"

const TasksList = () => {
    const [tasks, setTasks] = useState(api.tasks.fetchAll())
    const handleDelete=(id)=>{setTasks(tasks.filter(task=>task.id!==id))}
    return (
        <>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <td>Задачи</td>
                        <td>Награда</td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=>(
                        <tr key={task.name}>
                            <td>
                                {task.name}
                            </td>
                            <td>
                                {task.price}
                            </td>
                            <td>
                                <button className="btn btn-success">Выполнено</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(task.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-warning">Добавить задачу</button>
        </>
    );
};

export default TasksList;