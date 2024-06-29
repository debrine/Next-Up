import { useLocalStorage } from "../../../../data/useLocalStorage"
import styles from './OperativeLevelComponents.module.css'


function firstLevelOperative() {

  // Store options saved in local storage temporarily.
  const [, setOperativeTemp] = useLocalStorage('OperativeTemp')
  return (
    <div className={styles.firstParentDiv}>
      <div className={styles.levelUpDescription}>
        At first level you gain the following abilities. You must confirm all changes before you can view your Character Sheet
      </div>
      <h3>Specialization</h3>
      <p>Your specialization represents your primary area of expertise. Pick one specialisation upon taking your 1st level of the operative class. Once made, this choice cannot be changed. Your specialization grants you the Skill Focus feat (see page 161 of the Core Rulebook) in your specialization's associated skills, and you gain a free skill rank in each of those skills at each operative level (this does not allow you to exceed the maximum number of skill ranks in a single skill).</p>
    </div>
  )
}

export default firstLevelOperative