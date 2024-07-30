import styles from './AbilityScoreType.module.css'

type AbilityScoreTypeProps = {
    attributeShort: string,
    attributeLong: string
}
function AbilityScoreType({
    attributeShort,
    attributeLong
}: AbilityScoreTypeProps){

    return(
        <div className={styles.parentDiv}>
            <div className={styles.shortDiv}>
                {attributeShort}
            </div>
            <div className={styles.longDiv}>
                {attributeLong}
            </div>
        </div>
    )
}

export default AbilityScoreType