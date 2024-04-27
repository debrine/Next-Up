import PropTypes from 'prop-types'
import styles from "./Login.module.css"
import LoginTextField from '../../components/login-components/LoginTextField.jsx'
import { useState } from 'react'

function Login(props){

    const [loggedIn, setLoggedIn] = useState(false)

    const testFunction = () => {
        setLoggedIn(c => !loggedIn)
        const toggleSideBar = document.getElementById(styles.parentDiv)

        toggleSideBar.classList.toggle(styles.hiddenDiv)
    }

    return(
        <>
            <div className={styles.parentDiv} onClick={testFunction} id={styles.parentDiv}>
                <div className={styles.loginContainer}>
                    <LoginTextField label='Username' loginStatus={loggedIn}/>
                    <br />
                    <LoginTextField label='Password' loginStatus={loggedIn}/>
                </div>
            </div>
        </>
    )
}

export default Login