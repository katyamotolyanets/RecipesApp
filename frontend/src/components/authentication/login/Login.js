import {useDispatch, useSelector} from "react-redux";
import { Formik, Field, Form } from "formik";
import {Link, Navigate} from "react-router-dom";
import * as Yup from "yup";

import "../../../App.scss"
import AuthService from "../../../services/auth.service";
import {Navbar} from "../../navbar/Navbar";

export const Login = () => {
    const dispatch = useDispatch();
    const failedLoginMessage = useSelector(state => state.message.login_message)
    const isAuthorized = useSelector(state => state.user.isAuthorized)


    const handleSubmit = (data) => {
        dispatch(AuthService.login(data.email, data.password))
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(5, 'Too short, min size is 5')
            .max(15, 'Too long, max size is 15')
            .required('Required')
    });

    return (
        isAuthorized ?
            <Navigate to={'/recipes'} />
            :
            <div className="authorization-container">
                <h1>Log in!</h1>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={values => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <Form method="POST" className="authorization-form">
                            <label htmlFor="email">Email</label>
                            <Field type="email"
                                   name="email"
                                   className="authorization-input"
                            />
                            {errors.email && touched.email ? (
                                <div className="error-message">{errors.email}</div>
                            ) : null}
                            <label htmlFor="password">Password</label>
                            <Field type="password"
                                   name="password"
                                   className="authorization-input"
                            />
                            {errors.password && touched.password ? (
                                <div className="error-message">{errors.password}</div>
                            ) : null}
                            <button type="submit">Login</button>
                            <label className="authorization-label">Does not have an account yet?</label>
                            <Link to={{pathname: '/register/'}}>Register</Link>
                            {failedLoginMessage ? (
                                <div className="error-message">{failedLoginMessage}</div>
                            ) : null}
                        </Form>
                    )}
                </Formik>
            </div>
    )
}