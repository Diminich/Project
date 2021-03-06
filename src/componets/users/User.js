import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../assets/images/User.jpg';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unFollow}) => {
    return (
            <div className={styles.usersInformation}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div className={styles.buttonFollowUnfollow}>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unFollow(user.id);
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span className={styles.usersLocation}>
                        <div>{'user.location.counter'}</div>
                         <div  className={styles.city}>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
    )
};

export default User;