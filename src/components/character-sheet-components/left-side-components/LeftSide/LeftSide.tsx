import AbilityScoreBlock from "../../ability-scores/AbilityScoreBlock";
import styles from "./LeftSide.module.css";

function LeftSide() {
  return (
    <div className={styles.parentDiv}>
      <AbilityScoreBlock />
    </div>
  );
}

export default LeftSide;
