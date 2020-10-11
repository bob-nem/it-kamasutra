import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src='https://wallpaperplay.com/walls/full/0/7/c/209100.jpg'/>
        { props.message }
        <div>
          <span>like</span> { props.likesCount }
        </div>
      </div>
    </div>
  )
};

export default Post;
