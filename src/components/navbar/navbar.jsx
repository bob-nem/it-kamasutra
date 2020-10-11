import React from 'react';
import style from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar;
