import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field  placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field  placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field  type={'checkBox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const onSubmit = (formData) => {
    console.log(formData)
};

const login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default login;