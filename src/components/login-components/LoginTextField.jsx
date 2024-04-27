import PropTypes from 'prop-types'
import styles from './LoginTextField.module.css'

function LoginTextField(props){

    const test = document.getElementsByClassName(styles.textAreaDiv)
    if(props.loginStatus){test[0].style.display = 'none'}

    return(
        <div className={styles.textAreaDiv}>
            <label>{props.label}:</label>
            <br />
            <input type='text' id={props.label} name={props.label}/>
            {props.loginStatus ? 'yes':'no'}
        </div>
    )
}

LoginTextField.propTypes ={
    label: PropTypes.string
}

export default LoginTextField