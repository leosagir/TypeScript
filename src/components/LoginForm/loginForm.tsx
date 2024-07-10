import React from 'react';
import MyButton from "../myButton/myButton";
import MyInput from "../MyInput/MyInput";
import './loginForm.css';

const LoginForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <MyInput
                id="name"
                name="name"
                type="text"
                placeholder="Enter your login"
                label="Login"
            />
            <MyInput
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
            />
            <MyInput
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
            />
            <MyButton type="submit" onClick={() => {}} name="Submit" />
        </form>
    );
}

export default LoginForm;
