// Write your code here
import './index.css'

const Logout = props => {
    const {logout}=props

    return(
        <button type="button" className="logout-button" onnClick={logout}>
        Logout </button>
    )
}
export default Logout