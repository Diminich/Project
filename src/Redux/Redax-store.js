import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: usersReducer
});

let store = createStore(reducers);

export default store;