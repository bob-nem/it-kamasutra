import React from 'react';
import {NavLink, Route} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

  let state = props.store.getState().dialogPage;

  let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = state.messagesData.map( m => <Message message={m.message} /> );
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }


  return (
    <div className={style.Dialogs}>
      <div className={style.DialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.Messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'>
            </textarea>
          </div>
          <div>
            <button onclick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
