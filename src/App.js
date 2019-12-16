import React from 'react';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import DialogsContainer from "./componets/dialogs/DialogsContainer";
import UsersContainer from "./componets/users/UsersContainer";
import ProfileContainer from "./componets/profile/ProfileContainer";
import HeaderContainer from "./componets/header/HeaderContainer";
import LoginPage from "./componets/login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/Users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </Switch>
            </div>
        </div>
    )
};

export default App;
