import React from 'react';
import style from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={style.item}>
        <img src='https://wallpaperplay.com/walls/full/0/7/c/209100.jpg'/>
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  )
};

export default Post;
