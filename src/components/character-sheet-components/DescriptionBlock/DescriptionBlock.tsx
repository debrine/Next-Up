import styles from './DescriptionBlock.module.css'
import SheetLabel from '../labels/SheetLabel.tsx'
import { useForm } from 'react-hook-form'
import { getValue } from '../../../utils/getValue.ts'
import { useContext, useEffect } from 'react'
import { KeyIDContext } from '../../../states/CharacterSheet/CharacterSheet.tsx'
import { setValue } from '../../../utils/setValue.ts'

function DescriptionBlock(){

    const{ keyID } = useContext(KeyIDContext)

    const {
        register,
        watch
    } = useForm({
        defaultValues:{
            descriptionBlock: getValue(`Description${keyID}`)
        }
    })

    useEffect(()=>{
        const subscription = watch((data)=>{
            console.log(data)
            setValue(`Description${keyID}`, data.descriptionBlock)
        })
        return ()=>subscription.unsubscribe()
    },[watch])

    return(
        <div className={styles.parentDiv}>
            <SheetLabel sheetLabelText='DESCRIPTION' />
            <textarea 
                {
                    ...register('descriptionBlock')
                }
                id={styles.descriptionID}
                spellCheck={false}
            />
        </div>
    )
}

export default DescriptionBlock