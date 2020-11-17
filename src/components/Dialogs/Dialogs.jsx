import React from 'react';
import {NavLink, Route} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'lorashik'},
    {id: 2, name: 'Shkura'},
    {id: 3, name: 'Morda'},
    {id: 4, name: 'Pusya'},
    {id: 5, name: 'Pavlik'},
    {id: 6, name: 'Lisa'},
  ]

  let messagesData = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 1, message: 'What are you doing today?'},
    {id: 1, message: 'Come on with us'},
  ]

  let dialogsElements = dialogsData.map ( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = messagesData.map( m => <Message message={m.message} /> );

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
