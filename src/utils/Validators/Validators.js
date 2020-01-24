export const required = value => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required'
    }
};

export const maxLengthCreator = (maxLength) => (value) => {
    debugger
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined

    // else {
    //     return undefined
    // }
};