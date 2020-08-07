import React from 'react';
import s from './ProfileDataForm.module.css';
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import styles from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <Form onSubmit={handleSubmit} className={styles.saveContainerSetting}>
            <div className={styles.buttonSaveSetting}>
                <button className={styles.saveButton}>save</button>
                {error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
                }
            </div>
            <div className={s.fullName}>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div className={s.LookingForJob}>
                <b>Looking for a job</b>: {createField('Looking for a job', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div className={s.MyProfessionalSkills}>
                <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div className={s.AboutMe}>
                <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div className={s.Contacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}
            </div>
        </Form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;