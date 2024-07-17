import HealthAndResolveBlock from "../HealthAndResolveBlock/HealthAndResolveBlock";
import InitiativeBlock from "../InitiativeBlock/InitiativeBlock";
import styles from "./RightSide.module.css";

function RightSide() {
  return (
    <div className={styles.parentDiv}>
      <InitiativeBlock />
      <HealthAndResolveBlock />
    </div>
  );
}

export default RightSide;
