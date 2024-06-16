import { useEffect, useState } from 'react';
import styles from './CharacterCreationThemeDisplay.module.css'
import { themeList } from '../../../data/theme-information/themeList';
import DropDownList from '../../DropDownList/DropDownList';

type CharacterCreationThemeDisplay={
    theme: string;
    themeOptionsSelected: {
    optionValue: string;
    optionSet: React.Dispatch<React.SetStateAction<string>>;
}[]
}

function CharacterCreationThemeDisplay(
    props: CharacterCreationThemeDisplay
) {
    const { theme, themeOptionsSelected } = props
  
  
    const [selectedThemeObject, setSelectedThemeObject] = useState<ThemeListTypes>({
        themeName: '',
        themeScoreModifiers: '',
        themeDescription: '',
        themeFunction: () => null,
        themeAbilityTitle: [],
        themeAbilityDescription: [],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
    })
  
    const {
        themeScoreModifiers,
        themeDescription,
        themeAbilityTitle,
        themeAbilityDescription,
        hasOptions,
        optionDescription,
        optionArray,
    } = selectedThemeObject
  
    // Set the theme object to display as user selects their theme.
    useEffect(()=>{
      themeList.forEach(themeType =>{
        if(themeType.themeName === theme){
          setSelectedThemeObject(themeType)
        }
      })
    },[theme])
  
  
    let themeAbilityArray = themeAbilityTitle.map(
      (header, index)=>{
        return(
          <div className={styles.abilityDiv}>
                <h3>{header}</h3>
                {/* hr is temp, the div will be a red line like the offical book. */}
                <hr />
                <div className={styles.redSeparator}></div>
                <div>{themeAbilityDescription[index]}</div>
              </div>
        )
      }
    )
    useEffect(()=>{
      themeOptionsSelected.forEach(i=>{
        i.optionSet('')
      })
    },[theme])
    
  
    // Sets values into an array to be used for character creation.
    function showOptions(){
      if(
        // If the theme has options to select.
        hasOptions
      ){
        return(
          optionDescription.map(
          (option: string, index: number)=>{
            return(
              <div className={styles.themeOptions} key={`themeOption${index}`}>
                <div>
                  {/* Display the description of the option. */}
                  {option}
                </div>
                <DropDownList 
                optionsArray={optionArray[index]}
                optionSelection={themeOptionsSelected[index].optionSet}
                optionType='Option'
                selectedOption={themeOptionsSelected[index].optionValue}
                />
              </div>
            )
          }
        )
        
        )
      }
    }
  
    function renderthemeInformation(){
      if(theme != ''){
        return(
          <div className={styles.parentDiv}>
            <div className={styles.descriptionDiv}>
                <h3 className={styles.modifierHeader}>
                    {themeScoreModifiers}
                </h3>
                <div className={styles.themeDescription}>
                    {themeDescription}
                </div>
            </div>

            {themeAbilityArray}
            {showOptions()}
          </div>
        )
      }
    }
  
    return(
      renderthemeInformation()
    )
}

export default CharacterCreationThemeDisplay