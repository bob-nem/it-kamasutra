import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  siteBar: sidebarReducer
});

let store = createStore(reducers);

export default store;
