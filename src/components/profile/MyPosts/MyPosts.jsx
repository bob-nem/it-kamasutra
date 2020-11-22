import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements =
    props.postsData.map  ( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={style.PostsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
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
