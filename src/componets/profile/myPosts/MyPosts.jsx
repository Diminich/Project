import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post messange={p.message} like={p.like} age={p.age}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewTextPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component={Textarea}
                       validate={[required, maxLength]}
                       placeholder={'Post message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewTextPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;