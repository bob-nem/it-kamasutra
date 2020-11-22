import React from 'react';
import style from './navbar.module.css';

const FriendList = (props) => {
  return (
    <div>
      <div className={style.FriendAva}></div>
      { props.friend }
    </div>
  )
};

export default FriendList;
