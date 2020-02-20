import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как ты Костя?', like: 'like ', age: '31'},
                {id: 2, message: 'Привет, нормально, а ты как?', like: 'like ', age: '15'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            // dialogs: [
            //     {id: 1, name: 'Dimych'},
            //     {id: 2, name: 'Andrey'},
            //     {id: 3, name: 'Sveta'},
            //     {id: 4, name: 'Sasha'},
            //     {id: 5, name: 'Victor'},
            //     {id: 6, name: 'Valera'}
            // ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Пошли гулять.'},
                {id: 3, message: 'Что задавали по математике?'},
                {id: 4, message: 'Что-то пошло не так.'},
                {id: 5, message: 'Я учусь на программиста.'},
                {id: 6, message: 'Что?'}
            ],
            newMessagesText: 'Привет. Хочу играть'
        }
    },
    _callSubscriber() {
        console.log('State')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};




window.store = store;

export default store;