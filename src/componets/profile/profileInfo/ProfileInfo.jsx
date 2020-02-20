import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../assets/images/User.jpg';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./profileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        });
    };

    return (
        <div>
            <div className={s.deskriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner &&
            <div className={s.buttonSaveSetting}>
                <button className={s.buttonEdit} onClick={goToEditMode}>edit</button>
            </div>
            }
            <div className={s.fullName}>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div className={s.LookingForJob}>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {profile.lookingForAJob &&
            <div className={s.MyProfessionalSkills}>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div className={s.AboutMe}>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div className={s.Contacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

export const Contact = ({contactTitle, contactValue}) => {
    return (<div className={s.contact}>
        <b>
            {contactTitle}
        </b>: {contactValue}
    </div>)
};

export default ProfileInfo;