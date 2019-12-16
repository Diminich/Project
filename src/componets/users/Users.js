import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../assets/images/User.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectPage}
                                 onClick={() => {
                                     props.setCurrentPage(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                    let photo = u.photos.small === null ? `${userPhoto}` : `${u.photos.small}`
                    return (
                        <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img  src={photo} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        <div>{'u.location.counter'}</div>
                         <div>{'u.location.city'}</div>
                    </span>
                </span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users;