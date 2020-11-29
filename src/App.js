import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar
          props={props.siteBar}
        />
        <Route
          path="/profile"
          render={ () =>
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          path="/dialogs"
          render={ () =>
            <Dialogs
              state={props.state.dialogPage}
            />
          }
        />
      </div>
  );
}

/*commit*/
export default App;
