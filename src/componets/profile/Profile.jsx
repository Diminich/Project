import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profileBlock}>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;