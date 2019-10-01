import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post messange='Привет, как ты Костя?' like='like ' age='32' />
                <Post messange='Привет, нормально, а ты как?' like='like ' age='15' />
            </div>
        </div>
    )
}

export default MyPosts;