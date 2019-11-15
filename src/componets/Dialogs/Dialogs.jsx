import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messages = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();

    let addMessages = () => {
        props.dispatch({type: 'ADD-MESSAGES'});
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGES-TEXT', newText: text});
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
                          value={props.state.newMessagesText}/>
                <div>
                    <button onClick={addMessages}>Add Message</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;