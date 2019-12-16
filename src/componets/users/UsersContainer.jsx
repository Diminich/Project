import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFetching, toggleIsFollowingInProgress,
    unFollow
} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   setCurrentPage={this.props.setCurrentPage} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unFollow}
                   {...this.props} followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
};

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, toggleIsFetching,
    toggleIsFollowingInProgress, getUsers
}))(UsersContainer)