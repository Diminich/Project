import {profileAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTOS_SUCCESS = 'SAVE_PHOTOS_SUCCESS';


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
            let newPost = {
                id: 3,
                message: action.newPostText,
                like: 'like ',
                age: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SAVE_PHOTOS_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state
    }

};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTOS_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};
export const updateUserStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch(error) {

    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
};


export default profileReducer;