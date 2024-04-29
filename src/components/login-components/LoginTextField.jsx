import PropTypes from 'prop-types'
import styles from './LoginTextField.module.css'

function LoginTextField(props){

    const test = document.getElementsByClassName(styles.textAreaDiv)
    if(props.loginStatus){
        Array.from(test).forEach(i=>{
            i.style.opacity = 0
        })
    } else {
        Array.from(test).forEach(i=>{
            function sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
            sleep(1000).then(()=> {i.style.opacity = 1})
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