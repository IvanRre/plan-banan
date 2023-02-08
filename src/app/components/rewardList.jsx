import React,{ useState } from "react";
import api from "../api"

const RewardList = () => {
    const [rewards, setRewards] = useState(api.rewards.fetchAll())
    const handleDelete=(id)=>{setRewards(rewards.filter(reward=>reward.id!==id))}
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <td>Плюшка</td>
                        <td>Стоимость</td>
                    </tr>
                </thead>
                <tbody>
                    {rewards.map((reward)=>(
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
            </table>
            <button className="btn btn-warning">Добавить плюшку</button>
        </div>
    );
};

export default RewardList;