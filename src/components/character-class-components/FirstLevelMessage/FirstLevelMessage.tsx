import styles from './FirstLevelMessage.module.css'

function FirstLevelMessage() {
  return (
    <div className={styles.parentDiv}>
        This is going to be a message about usage of the app.
    </div>
  )
}

export default FirstLevelMessage