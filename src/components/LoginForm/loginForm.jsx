import MyButton from "../myButton/myButton"
import MyInput from "../MyInput/MyInput"
import './loginForm.css'


export default function LoginForm(){
    return(
        <form className="loginForm">
            <MyInput
            name="name"
            type="type"
            placeholder="Enter your login"
            label="Login"
            />
            <MyInput
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            />
            <MyInput
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            />
            <MyButton onClick={"submit"} name={'Submit'} type={"submit"} />
        </form>
    )
}