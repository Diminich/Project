import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Привет, как ты Костя?', like: 'like ', age: '31'},
        {id: 2, message: 'Привет, нормально, а ты как?', like: 'like ', age: '15'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            debugger
            let newPost = {
                id: 3,
                message: action.newPostText,
                like: 'like ',
                age: '0'
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

            case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default: return state
    }

};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
};
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export default profileReducer;