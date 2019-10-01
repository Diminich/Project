import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return <div>
        <div >
            <img src='https://www.w3schools.com/howto/img_snow.jpg' />
        </div>
        <div>
            ava+deskription
    </div>
        <MyPosts />
    </div>
}

export default Profile;