import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/Dialogs'
                               render ={ () => <DialogsContainer />} />
                        <Route path='/Profile/:userId?'
                               render ={ () => <ProfileContainer />} />
                        <Route path='/Users'
                               render ={ () => <UsersContainer />} />
                    </Switch>
                </div>
            </div>
    )
};

export default App;
