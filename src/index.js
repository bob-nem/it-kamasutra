import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my second post.', likesCount: 45},
  {id: 3, message: 'Letter for you fun and pleasure', likesCount: 6},
];

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

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
