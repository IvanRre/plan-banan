import React,{ useState, useEffect } from "react";
import api from "../api";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import BookMark from "./common/bookmark";
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";

const TasksList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [tasks, setTasks] = useState()
    const pageSize = 4
    useEffect(() => {
        api.tasks.fetchAll().then((data) => setTasks(data));
    }, []);
    const handleExecute=(id)=>{
        setTasks(tasks.filter(task=>task.id!==id))
    }
    const handleDelete=(id)=>{setTasks(tasks.filter(task=>task.id!==id))}
    const handleToggleRepeat = (id) => {
        const newArray = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, repeat: !task.repeat };
            }
            return task;
        });
        setTasks(newArray);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    if(tasks) {
        const count = tasks.length
        const tasksCrop = paginate(tasks, currentPage, pageSize);
        return (
            <>{count > 0 && (
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <td>Задачи</td>
                            <td>Сложность</td>
                            <td>Награда</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tasksCrop.map((task)=>(
                            <tr key={task.id}>
                                <td>
                                    <Link to={`/tasks/${task.id}`}>{task.name}</Link>
                                </td>
                                <td>
                                    {task.difficulty}
                                </td>
                                <td>
                                    {task.price}
                                </td>
                                <td>
                                    <BookMark
                                        status={task.repeat}
                                        onClick={() => handleToggleRepeat(task.id)}
                                    />
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success" onClick={()=>handleExecute(task.id)}>Вып</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(task.id)}>Уд</button>
                                </td>
                                <td>
                                    <button className="btn btn-info">Изм</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}
                <button className="btn btn-warning">Добавить задачу</button>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </>
        );
    }
    return "loading...";
};

export default TasksList;