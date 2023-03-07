import React,{ useState, useEffect  } from "react";
import api from "../api"
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate"

const RewardList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [rewards, setRewards] = useState()
    const pageSize = 4
    useEffect(() => {
        api.rewards.fetchAll().then((data) => setRewards(data));
    }, []);
    const handleDelete=(id)=>{setRewards(rewards.filter(reward=>reward.id!==id))}
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    if(rewards){
        const count = rewards.length
        const rewardsCrop = paginate(rewards, currentPage, pageSize);
        return (
            <div>{count > 0 && (
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <td>Плюшка</td>
                            <td>Стоимость</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rewardsCrop.map((reward)=>(
                            <tr key={reward.name}>
                                <td>
                                    {reward.name}
                                </td>
                                <td>
                                    {reward.price}
                                </td>
                                <td>
                                    <button className="btn btn-success">Купить</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(reward.id)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}
                <button className="btn btn-warning">Добавить плюшку</button>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    }
    return "loading...";
};

export default RewardList;