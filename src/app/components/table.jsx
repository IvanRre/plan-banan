import React from 'react';
import { useParams } from "react-router-dom";
import Tasks from './tasks';
import TaskPage from './page/taskPage/taskPage';
import EditTaskPage from './page/editTaskPage/editTaskPage';


const Table = () => {
    const params = useParams();
    const { taskId, edit } = params;
    return (
        <>
            {taskId ? (edit ? (<EditTaskPage />) : (<TaskPage taskId={taskId} />)) : (
                <Tasks/>
            )}
        </>
    )
}

export default Table;