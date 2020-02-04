import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/Profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let {getUserProfile, getUserStatus, history, authorized} = this.props;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = authorized;
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfile(userId);
        getUserStatus(userId);

    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile}
                         status={this.props.status} updateUserStatus={this.props.updateUserStatus}
                         savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorized: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);