import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";

const TaskPage = ({ taskId }) => {
    const history = useHistory();
    const [task, setTask] = useState();
    useEffect(() => {
        api.tasks.getById(taskId).then((data) => setTask(data));
    }, []);
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    if (task) {
        return (
            <div>
                <h1> {task.name}</h1>
                <h2>Сложность: {task.difficulty}</h2>
                <h2>Награда: {task.price}</h2>
                <button onClick={handleClick}>Изменить</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

TaskPage.propTypes = {
    taskId: PropTypes.string.isRequired
};

export default TaskPage;
