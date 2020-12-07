import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my second post.', likesCount: 45},
        {id: 3, message: 'Letter for you fun and pleasure', likesCount: 6},
      ],
      newPostText: 'it-kamasutra',
    },
    dialogPage: {
      dialogsData: [
        {id: 1, name: 'lorashik'},
        {id: 2, name: 'Shkura'},
        {id: 3, name: 'Morda'},
        {id: 4, name: 'Pusya'},
        {id: 5, name: 'Pavlik'},
        {id: 6, name: 'Lisa'},
      ],
      messagesData: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'What are you doing today?'},
        {id: 3, message: 'Come on with us'},
      ],
      newMessageBody: ""
    },
    siteBar: [
      {id: 1, friend: 'lorashik'},
      {id: 2, friend: 'Shkura'},
      {id: 3, friend: 'Morda'},
    ]
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {

    this._state.profilePage = profileReducer (this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer (this._state.dialogPage, action);
    this._state.siteBar = sidebarReducer (this._state.siteBar, action);

    this._callSubscriber(this._state);
  }
};







window.store = store;

export default store;
