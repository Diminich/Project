import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.deskriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;