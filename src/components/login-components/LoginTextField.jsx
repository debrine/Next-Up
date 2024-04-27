import PropTypes from 'prop-types'
import styles from './LoginTextField.module.css'

function LoginTextField(props){

    const test = document.getElementsByClassName(styles.textAreaDiv)
    if(props.loginStatus){
        Array.from(test).forEach(i=>{
            i.style.display = 'none'
        })
    } else {
        Array.from(test).forEach(i=>{
            i.style.display = 'block'
        })
    }

    return(
        <div className={styles.textAreaDiv}>
            <label>{props.label}:</label>
            <br />
            <input type='text' id={props.label} name={props.label}/>
        </div>
    )
}

LoginTextField.propTypes ={
    label: PropTypes.string
}

export default LoginTextField