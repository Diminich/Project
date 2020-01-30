import React from 'react';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import {Route, Switch, withRouter} from 'react-router-dom';
import HeaderContainer from "./componets/header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/App-reducer";
import Preloader from "./componets/common/preloader/Preloader";
import {withSuspense} from "./componets/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./componets/dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./componets/users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./componets/profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./componets/login/Login'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/Dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/Profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/Users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(LoginPage)}/>
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