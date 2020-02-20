import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPYoetk0T8RXSqLX5kamv_hIaqhmT7xNYcDaGAaTypEW69Mp4dA' />
            {props.messange}
            <div className={s.likeAge}>
                <span>{ props.like }</span>
                <span>{ props.age }</span>                
            </div>
        </div>
    )
}

export default Post;