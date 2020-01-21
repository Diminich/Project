import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messages = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addNewMessageBody = (values) => {
        props.addMessagesActionCreator(values.newMessagesText);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessageBody} />
        </div>
    )
};


const AddMessageForm = (props) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newMessagesText'} component={'textarea'} />
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;