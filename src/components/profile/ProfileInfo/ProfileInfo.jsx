import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={`${style.content} ${style.img}`} src='https://photocentra.ru/images/main87/870175_main.jpg' />
      </div>
      <div className={style.AvatarDescription}>
        avatar with description
      </div>
    </div>
  )
};

export default ProfileInfo;
