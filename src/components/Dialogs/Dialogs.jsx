import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={style.Dialogs}>
      <div className={style.DialogsItems}>
        <div className={style.Items + ' ' + style.Active}>
          Lorashik
        </div>
        <div className={style.Items}>
          Shkura
        </div>
        <div className={style.Items}>
          Morda
        </div>
        <div className={style.Items}>
          Pusya
        </div>
        <div className={style.Items}>
          Pavlik
        </div>
        <div className={style.Items}>
          Lisa
        </div>
      </div>
      <div className={style.Messages}>
        <div className={style.Message}>Hi, how are you?</div>
        <div className={style.Message}>What are you doing today?</div>
        <div className={style.Message}>Come on with us</div>
      </div>
    </div>
  )
}

export default Dialogs;
