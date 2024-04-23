import PropTypes from 'prop-types'
import styles from "./Login.module.css"
import LoginTextField from '../../components/login-components/LoginTextField.jsx'

function Login(props){
    return(
        <>
            <div className={styles.parentDiv}>
                <div className={styles.loginContainer}>
                    <LoginTextField label='Username'/>
                    <br />
                    <LoginTextField label='Password'/>
                </div>
            </div>
        </>
    )
}

export default Login