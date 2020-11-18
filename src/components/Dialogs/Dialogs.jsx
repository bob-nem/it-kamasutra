import React from 'react';
import {NavLink, Route} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.messagesData.map( m => <Message message={m.message} /> );

  return (
    <div className={style.Dialogs}>
      <div className={style.DialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.Messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
