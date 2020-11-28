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
        {id: 1, message: 'What are you doing today?'},
        {id: 1, message: 'Come on with us'},
      ],
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
  addPost () {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber (this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber (this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
