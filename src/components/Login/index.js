// Write your code here
import './index.css'

const Login = props => {
    const {login}=props

    return(
        <button type="button" className="login-button" onnClick={login}>
        Login </button>
    )
}
export default Login