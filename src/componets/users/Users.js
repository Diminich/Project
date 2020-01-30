import React from 'react';
import Paginator from "../common/Paginators/Paginator";
import User from "./User";

let Users = ({currentPage, setCurrentPage, totalUsersCount, pageSize, users, followingInProgress, unFollow, follow,}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage}
                       totalItemCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u =>
                        <User user={u} key={u.id} followingInProgress={followingInProgress} unFollow={unFollow}
                              follow={follow}/>
                    )
                }
            </div>

        </div>)
}

export default Users;