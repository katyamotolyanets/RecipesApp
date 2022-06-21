import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

import AuthService from "../../../services/auth.service";
import {setFindRecipes} from "../../../reducers/recipesReducer";
import {useState} from "react";

export const Register = () => {
    const dispatch = useDispatch();
    const failedRegisterMessage = useSelector(state => state.message.register_message)
    const isAuthorized = useSelector(state => state.user.isAuthorized)
    const [isReg, setIsReg] = useState(false)

    const handleSubmit = (data) => {
        dispatch(AuthService.register(
            data.username,
            data.email,
            data.password
        )).then(() => setIsReg(true))
    };

    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
            .min(4, 'Too short, min size is 4')
            .max(25, 'Too long, max size is 10')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(5, 'Too short, min size is 5')
            .max(15, 'Too long, max size is 15')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
    });

    return (
        isReg ?
            <Navigate to={'/recipes'} />
            :
            <div className="authorization-container">
                <h1>Register!</h1>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={values => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <Form method="POST" className="authorization-form">
                            <label htmlFor="username">Username</label>
                            <Field
                                type="text"
                                name="username"
                                className="authorization-input"
                            />
                            {errors.username && touched.username ? (
                                <div className="error-message">{errors.username}</div>
                            ) : null}
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="authorization-input"
                            />
                            {errors.email && touched.email ? (
                                <div className="error-message">{errors.email}</div>
                            ) : null}
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="authorization-input"
                            />
                            {errors.password && touched.password ? (
                                <div className="error-message">{errors.password}</div>
                            ) : null}
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                className="authorization-input"
                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div className="error-message">{errors.confirmPassword}</div>
                            ) : null}
                            <button type="submit">Register</button>
                            <label className="authorization-label">Already have an account?</label>
                            <Link to={{pathname: '/login/'}}>Login</Link>
                            {failedRegisterMessage ? (
                                <div className="error-message">{failedRegisterMessage}</div>
                            ) : null}
                        </Form>
                    )}
                </Formik>
            </div>
    )
}