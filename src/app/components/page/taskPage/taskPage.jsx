// import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

const TaskPage = ({ taskId }) => {
    // const history = useHistory();
   
    // const handleClick = () => {
    //     history.push(history.location.pathname + "/edit");
    // };
    // if (task) {
    //     return (
    //         <div>
    //             <h1> {task.name}</h1>
    //             <button onClick={handleClick}>Изменить</button>
    //         </div>
    //     );
    // } else {
    //     return <h1>Loading</h1>;
    // }
};

TaskPage.propTypes = {
    taskId: PropTypes.string.isRequired
};

export default TaskPage;
