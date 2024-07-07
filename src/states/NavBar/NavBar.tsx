import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { MutableRefObject, useEffect, useRef } from 'react'



function NavBar() {
  
  const nameArray = useRef<NameArrayType>([])
  // Find if the array exists.
  useEffect(()=>{
    if(localStorage.getItem('charactersAvailable') != null){
      nameArray.current = JSON.parse(localStorage.getItem('charactersAvailable')!)
    }
  })

  

  return (
    <nav className={styles.navBarParent}>
      <ListOfCharacters nameArray={nameArray} />
      <div className={styles.navBarItem}>
          <Link to='/Next-Up/create-character'><span className={styles.plusCircle}>+</span> Add Character</Link>
      </div>
    </nav>
  )
}

type ListOfCharactersProps = {
  nameArray: MutableRefObject<NameArrayType>
}

function ListOfCharacters({nameArray}:ListOfCharactersProps){
  return(
    nameArray.current.map(i=>{
      return(
        <div className={styles.navBarItem} key={`${i.characterName}${i.id}`}>
          <Link to='/Next-Up/charactersheet' state={{ keyID: i.id }}>{i.characterName}</Link>
        </div>
      )
    })
  )
}

export default NavBar