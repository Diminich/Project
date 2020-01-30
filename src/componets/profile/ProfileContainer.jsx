import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/Profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let {getUserProfile, getUserStatus, history, authorized} = this.props;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = authorized;
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfile(userId);
        getUserStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
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
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);