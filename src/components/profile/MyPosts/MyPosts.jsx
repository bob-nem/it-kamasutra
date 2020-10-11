import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are you?" likesCount='13'/>
        <Post message="It's my first message" likesCount='234'/>
        <Post message="Letter for you fun and pleasure" likesCount='76'/>
      </div>
    </div>
  )
};

export default MyPosts;
