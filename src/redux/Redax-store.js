import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;