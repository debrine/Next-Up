import styles from './SheetLabel.module.css'
type SheetLabelProps = {
    sheetLabelText: string
}


function SheetLabel({
    sheetLabelText
}: SheetLabelProps){
    return(
        <div className={styles.labelBox}>
            <span className={styles.labelBoxLeft}>
                <div className={styles.labelBoxTopLeft} />
                <div className={styles.labelBoxBottomLeft} />
            </span>
            <span className={styles.labelText}>{sheetLabelText}</span>
            <span className={styles.labelBoxRight}>
                <div className={styles.labelBoxTopRight} />
                <div className={styles.labelBoxBottomRight} />
            </span>
        </div>
    )
    
}

export default SheetLabel