import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;