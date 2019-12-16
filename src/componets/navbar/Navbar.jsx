import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>
    )
}

export default Navbar;