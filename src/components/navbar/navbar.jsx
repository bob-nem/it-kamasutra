import React from 'react';
import style from './navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendList from './Friendlist';

const Navbar = (props) => {
  let siteBar = [
    {id: 1, friend: 'lorashik'},
    {id: 2, friend: 'Shkura'},
    {id: 3, friend: 'Morda'},
  ];

  let friendElements =
    siteBar.map  ( f => <FriendList friend={f.friend} /> );

  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs"  activeClassName={style.activeLink}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <a>Posts</a>
      </div>
      <div className={style.item}>
        <a>Music</a>
      </div>
      <div className={style.item}>
        <a>Settings</a>
      </div>
      <div className={style.FriendZone}>
        <h3 className={style.FriendHeader}>Friends</h3>
        <div className={style.FriendList}>
          { friendElements }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
