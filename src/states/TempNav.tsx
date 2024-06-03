import { Link } from "react-router-dom"


function TempNav() {
  return (
    <div>
    <Link to='/Next-Up/' style={{margin: 10}}>Home</Link>
        <Link to='/Next-Up/initiativetest' style={{margin: 10}}>Initiative Test</Link>
        <Link to='/Next-Up/form' style={{margin: 10}}>Form</Link>
        <Link to='/Next-Up/charactersheet' style={{margin: 10}}>Character Sheet</Link>
    </div>
  )
}

export default TempNav