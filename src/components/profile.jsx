import React from 'react';
import style from './profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://photocentra.ru/images/main87/870175_main.jpg' />
      </div>
      <div>
        avatar with description
      </div>
      <div>
        my posts
        <div>
          New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div className={style.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;
