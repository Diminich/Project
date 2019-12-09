import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow.jpg'/>
            </div>
            <div className={s.deskriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+deskription
            </div>
        </div>
    )
}

export default ProfileInfo;