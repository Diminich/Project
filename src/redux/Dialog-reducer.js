const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';

let initialState = {
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

};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {
                id: 7,
                message: state.newMessagesText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessagesText: ''
            };

        case UPDATE_NEW_MESSAGES_TEXT:
            return {
                ...state,
                newMessagesText: action.newText
            };

        default:
            return state
    }
    ;

    // return state;
};

export const addMessagesActionCreator = () => ({type: ADD_MESSAGES});
export const addNewMessagesTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGES_TEXT, newText: text});

export default dialogReducer;