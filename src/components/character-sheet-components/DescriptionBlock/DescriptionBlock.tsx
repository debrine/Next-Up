import styles from './DescriptionBlock.module.css'
import SheetLabel from '../labels/SheetLabel.tsx'

function DescriptionBlock(){

    return(
        <div className={styles.parentDiv}>
            <SheetLabel sheetLabelText='DESCRIPTION' />
            <textarea name="description" id={styles.descriptionID}/>
        </div>
    )
}

export default DescriptionBlock