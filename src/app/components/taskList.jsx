import TaskItem from './TaskItem';
import Pagination from "./common/pagination";

const TodoList = ({
    tasksCrop, 
    count,
    pageSize,
    currentPage,
    handlePageChange
}) => {
    return (
        <>
            <table className="table table-striped">
                <tbody>
                    {tasksCrop.map((task)=>(
                        <TaskItem id={task.id} text={task.text}/>
                    ))}
                </tbody>
            </table>
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
};

export default TodoList;