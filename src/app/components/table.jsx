import React from 'react';
import { useParams } from "react-router-dom";
import RewardList from './rewardList';
import TasksList from './tasksList';
import TaskPage from './page/taskPage/taskPage';
import EditTaskPage from './page/editTaskPage/editTaskPage';


const Table = () => {
    const params = useParams();
    const { taskId, edit } = params;
    return (
        <>
            {taskId ? (edit ? (<EditTaskPage />) : (<TaskPage taskId={taskId} />)) : (
                <table>
                    <tbody>
                        <tr className="d-flex align-items-start">
                            <td className="mx-5 mt-3"><TasksList/></td>
                            <td className="mx-5 mt-3"><RewardList/></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Table;