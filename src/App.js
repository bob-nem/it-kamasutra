import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route
          path="/profile"
          render={ () =>
            <Profile
              state={props.appState.profilePage}
            />
          }
        />
        <Route
          path="/dialogs"
          render={ () =>
            <Dialogs
              state={props.appState.dialogPage}
            />
          }
        />
      </div>
    </BrowserRouter>
  );
}

/*commit*/
export default App;
