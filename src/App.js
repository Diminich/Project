import React from 'react';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
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
    catchAllUnhandledErrors = (reason, promise) => {
        alert('Some error occured')
    };

    componentDidMount() {
        this.props.initializedApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                        <Route exact path='/'
                               render={() => <Redirect to={'/Profile'}/>}/>
                        <Route path='/Dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/Profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/Users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(LoginPage)}/>
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
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