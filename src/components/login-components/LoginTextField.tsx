import styles from './LoginTextField.module.css'

type LoginTextFieldProps = {
    label: string, 
    loginStatus: boolean
}

function LoginTextField({
    label,
    loginStatus,
}: LoginTextFieldProps){

    const field = document.getElementById(styles.textAreaDiv + label)
    if(loginStatus){
        field?.style.setProperty('opacity', '0')
    } else{
        function sleep(ms: number){
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        sleep(1000).then(()=> field?.style.setProperty('opacity', '1'))
    }

    return(
        <div className={styles.textAreaDiv} id={styles.textAreaDiv + label}>
            <label>{label}:</label>
            <br />
            <input type='text' id={label} name={label}/>
        </div>
    )
}

export default LoginTextField