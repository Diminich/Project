import React from 'react';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import {Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from "./componets/dialogs/DialogsContainer";
import UsersContainer from "./componets/users/UsersContainer";
import ProfileContainer from "./componets/profile/ProfileContainer";
import HeaderContainer from "./componets/header/HeaderContainer";
import LoginPage from "./componets/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/App-reducer";
import Preloader from "./componets/common/preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized) {
           return <Preloader />
        }
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
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializedApp}))(App);