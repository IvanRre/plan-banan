import { useDispatch } from 'react-redux';
import {completeTask, removeTask} from '../store/todoSlice';
import { Link } from "react-router-dom";

const TaskItem = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete=()=>{
    dispatch(removeTask())
    setCurrentPage(1)
  }

  return (
    <tr key={id}>
        <td>
            <Link to={`/tasks/${id}`}>{text}</Link>
        </td>
        <td>
            <button type="button" className="btn btn-success" onClick={()=>dispatch(completeTask(id))}>V</button>
        </td>
        <td>
            <button type="button" className="btn btn-danger" onClick={()=>handleDelete(id)}>X</button>
        </td>
    </tr>
  );
};

export default TaskItem;