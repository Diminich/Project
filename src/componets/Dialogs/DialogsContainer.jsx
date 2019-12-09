import React from 'react';
import {addMessagesActionCreator, addNewMessagesTextActionCreator} from "../../Redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addNewMessagesTextActionCreator: (text) => {
            dispatch(addNewMessagesTextActionCreator(text));
        },
        addMessagesActionCreator: () => {
            dispatch(addMessagesActionCreator());
        }
    }
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;