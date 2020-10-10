import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img className={`${style.content} ${style.img}`} src='https://photocentra.ru/images/main87/870175_main.jpg' />
      </div>
      <div>
        avatar with description
      </div>
      <MyPosts />
    </div>
  )
};

export default Profile;
