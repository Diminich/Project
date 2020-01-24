import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field  placeholder={'Email'} validate={[required]} name={'email'} component={Input}/>
            </div>
            <div>
                <Field  placeholder={'Password'} validate={[required]} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field  type={'checkBox'}  name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {login})(Login);