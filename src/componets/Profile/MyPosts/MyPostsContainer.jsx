import React from 'react';
import {addNewTextActionCreator, addPostActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
            },
        updateNewPostText: (text) => {
            dispatch(addNewTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;