import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements =
    props.postsData.map  ( p => <Post message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={style.PostsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div className={style.posts}>
        { postElements }
      </div>
    </div>
  )
};

export default MyPosts;
