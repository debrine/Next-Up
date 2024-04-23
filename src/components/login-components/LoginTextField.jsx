import PropTypes from 'prop-types'

function LoginTextField(props){
    return(
        <>
            <label for={props.label}>{props.label}:</label>
            <br />
            <input type='text' id={props.label} name={props.label}/>
        </>
    )
}

export default LoginTextField