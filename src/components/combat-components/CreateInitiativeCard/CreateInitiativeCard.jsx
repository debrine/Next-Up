import PropTypes from 'prop-types'
import styles from './CreateInitiativeCard.module.css'
import React, {useState} from 'react'

function CreateInitiativeCard(props){

    const [color, setColor] = useState('#ffffff')
    const [name, setName] = useState()
    const [comment, setComment] = useState()

    function selectBackgroundColor(e){
        setColor(e.target.value)
    }

    function updateCharacterName(e){
        setName(e.target.value)
    }
    
    function updateComment(e){
        setComment(e.target.value)
    }
    return(
        <div className={styles.cardContainer} style={{backgroundColor: color}}>
            <input 
                value={name} 
                onChange={updateCharacterName} 
                placeholder='Enter Name'
            />
            <div className={styles.commentContainer}>
                <textarea 
                    value={comment}
                    onChange={updateComment}
                    placeholder='Character Notes'
                />
            </div>
            <input 
                type="color" 
                value={color}
                onChange={selectBackgroundColor}
            />
        </div>
    )
}

export default CreateInitiativeCard