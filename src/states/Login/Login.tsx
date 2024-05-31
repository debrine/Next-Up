
import styles from "./Login.module.css"
import LoginTextField from '../../components/login-components/LoginTextField.tsx'
import { useState } from 'react'

function Login(){
    const [loggedIn, setLoggedIn] = useState(false)

    const testFunction = () => {
        setLoggedIn(!loggedIn)
        let toggleSideBar: HTMLElement = (document.getElementById(styles.parentDiv) as HTMLDivElement)

        toggleSideBar.classList.toggle(styles.hiddenDiv)

        // const backgroundHide = document.getElementsByClassName('backgroundDiv')
        // backgroundHide[0].style.opacity = 0
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