let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Привет, как ты Костя?', like: 'like', age: '31'},
            {id: 2, message: 'Привет, нормально, а ты как?', like: 'like', age: '15'}
        ],
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
        ]
    }
}

export default state;