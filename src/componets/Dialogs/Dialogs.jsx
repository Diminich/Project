import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} />)
    let messages = props.state.messages.map( m => <Message message={m.message} id={m.id} />)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )

}

export default Dialogs;