import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs'
                               render ={ () => <Dialogs state={props.state.dialogsPage} />} />
                        <Route path='/profile'
                               render ={ () => <Profile state={props.state.profilePage} />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>)
}


// Header Верхняя часть
// Navbar Меню
// Dialogs
// Post Фотографии на сообщение
// MyPosts сообщение

export default App;
