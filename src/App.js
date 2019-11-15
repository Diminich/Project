import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import {Route, Switch} from 'react-router-dom';

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs'
                               render ={ () => <Dialogs state={props.state.dialogsPage}
                                                        dispatch={props.dispatch} />} />
                        <Route path='/profile'
                               render ={ () => <Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch}/>} />
                    </Switch>
                </div>
            </div>
    )
};

export default App;
