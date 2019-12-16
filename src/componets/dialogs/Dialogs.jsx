import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messages = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessages = () => {
        props.addMessagesActionCreator();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.addNewMessagesTextActionCreator(text);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={state.newMessagesText}/>
                <div>
                    <button onClick={addMessages}>Add Message</button>
                </div>
            </div>
        </div>
    )

};

export default Dialogs;