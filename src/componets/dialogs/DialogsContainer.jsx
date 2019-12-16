import React from 'react';
import {addMessagesActionCreator, addNewMessagesTextActionCreator} from "../../redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

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


export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);