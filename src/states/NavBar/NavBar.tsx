import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useEffect, useState } from 'react'
import { getValue } from '../../utils/getValue.ts'



function NavBar() {
  
  const [nameArray, setNameArray] = useState<NameArrayType>(getValue('charactersAvailable'))
  
  useEffect(()=>{
    if(getValue('charactersAvailable') != null){
      setNameArray(getValue('charactersAvailable'))
    }
  },[]) // Find a way to update the value

  
  return (
    <nav className={styles.navBarParent}>
      {
        nameArray &&
        <ListOfCharacters nameArray={nameArray} />
      }
      <div className={[styles.navBarItem, styles.createCharacter].join(' ')}>
          <Link to='/Next-Up/create-character'><span className={styles.plusCircle}>+</span> Add Character</Link>
      </div>
    </nav>
  )
}

type ListOfCharactersProps = {
  nameArray: NameArrayType
}

function ListOfCharacters({nameArray}:ListOfCharactersProps){
  return(
    nameArray.map(i=>{
      return(
        <div className={styles.navBarItem} key={`${i.characterName}${i.id}`}>
          <Link to={`/Next-Up/charactersheet/${i.id}`}>{i.characterName}</Link>
        </div>
      )
    })
  )
}

export default NavBar