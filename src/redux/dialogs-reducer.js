const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body =  state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;
