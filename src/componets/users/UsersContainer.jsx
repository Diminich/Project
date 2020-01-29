import React from 'react';
import {connect} from "react-redux";
import { follow, requestUsers,
    setCurrentPage,
    toggleIsFetching, toggleIsFollowingInProgress,
    unFollow } from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/Users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.requestUsers(this.props.currentPage, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose (
    connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, toggleIsFetching,
    toggleIsFollowingInProgress, requestUsers
}))(UsersContainer)