import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;