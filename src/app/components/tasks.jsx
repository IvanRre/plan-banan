import React,{ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../store/todoSlice"
import { paginate } from "../utils/paginate";
import "bootstrap/dist/css/bootstrap.css"

const TasksList = () => {
    const tasks = useSelector(state => state.todos.tasks)
    const dispatch = useDispatch()
    const addTodo = () => {
        dispatch(addTask({text}))
        setText('')
        console.log(tasks)
    }
    const [text, setText] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 6
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if(tasks) {
        const count = tasks.length
        const tasksCrop = paginate(tasks, currentPage, pageSize);
        return (
            <>
                <label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button className="btn btn-warning" onClick={addTodo}>Добавить задачу</button>
                </label>
                {/* {count > 0 && ( */}
                        <TasksList
                            tasksCrop={tasksCrop}
                            handlePageChange={handlePageChange}
                            count={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                        />
                {/* )} */}
            </>
        );
    }
    return "loading...";
};

export default TasksList;