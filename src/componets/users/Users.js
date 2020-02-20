import React from 'react';
import s from './Users.module.css'
import Paginator from "../common/Paginators/Paginator";
import User from "./User";

let Users = ({currentPage, setCurrentPage, totalUsersCount, pageSize, users, followingInProgress, unFollow, follow,}) => {
    return (
        <div className={s.usersContainer}>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage}
                       totalItemCount={totalUsersCount} pageSize={pageSize}/>
            <div className={s.users}>
                {
                    users.map(u =>
                        <User user={u} key={u.id} followingInProgress={followingInProgress} unFollow={unFollow}
                              follow={follow}/>
                    )
                }
            </div>
        </div>)
};

export default Users;