import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            <div className={styles.captcha}>
            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField('Symbols from image', "captcha", [required], Input, {})}
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div className={styles.buttonAddLogin}>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.loginContainer}>
            <h4 className={styles.testEmailPassword}>Для просмотра соц сети введите тестовый Email и Password</h4>
            <h4 className={styles.testEmailPassword}>Email: free@samuraijs.com</h4>
            <h4 className={styles.testEmailPassword}>Password: free</h4>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {login})(Login);