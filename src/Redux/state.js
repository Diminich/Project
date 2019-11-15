const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';

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
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                like: 'like ',
                age: '0'
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else {
            if (action.type === ADD_MESSAGES) {
                let newMessage = {
                    id: 7,
                    message: this._state.dialogsPage.newMessagesText
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessagesText = '';
                this._callSubscriber(this._state);
            } else {
                if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
                    this._state.dialogsPage.newMessagesText = action.newText;
                    this._callSubscriber(this._state);
                }
            }
        }

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const addNewTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


window.store = store;

export default store;