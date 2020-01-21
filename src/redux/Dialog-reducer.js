const ADD_MESSAGES = 'ADD-MESSAGES';

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
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let body = action.newMessagesText;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };

        default:
            return state
    }
    ;

};

export const addMessagesActionCreator = (newMessagesText) => ({type: ADD_MESSAGES, newMessagesText});


export default dialogReducer;