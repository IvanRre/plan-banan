import React from 'react';
import RewardList from './rewardList';
import TasksList from './tasksList';

const Table = () => {
    return (
        <table>
            <tbody>
                <tr className="d-flex align-items-start">
                    <td className="mx-5 mt-3"><TasksList/></td>
                    <td className="mx-5 mt-3"><RewardList/></td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table;