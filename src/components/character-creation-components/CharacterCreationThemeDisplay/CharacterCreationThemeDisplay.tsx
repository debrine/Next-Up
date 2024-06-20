import { useContext, useEffect, useState } from 'react';
import styles from './CharacterCreationThemeDisplay.module.css'
import { themeList } from '../../../data/theme-information/themeList';
import DropDownList from '../../DropDownList/DropDownList';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter';


function CharacterCreationThemeDisplay() {
  
  const { setTheme, themeArray, themeOptionsSelected } = useContext(CharacterCreationContext)

  const [themeSelected, setThemeSelected] = useState<string>('');
  
  
  const [{
    themeScoreModifiers,
    themeDescription,
    themeAbilityTitle,
    themeAbilityDescription,
    hasOptions,
    optionDescription,
    optionArray,
  }, setSelectedThemeObject] = useState<ThemeListTypes>({
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
  
  function optionSelection(
    option: string
  ){
      // Set the option to be shown as selected.
      setThemeSelected(option)
      // Set our values to the option selected (ex. race, chClass, theme....)
      setTheme(option)
  }
  
  useEffect(()=>{
    // Set the theme object to display as user selects their theme.
    if(themeList[themeSelected]){
      setSelectedThemeObject(themeList[themeSelected])
    }
    // Reset the options when race changes.
    themeOptionsSelected.forEach(i=>{
      i.optionSet('')
    })
  },[themeSelected])
  
  
  let themeAbilityArray = themeAbilityTitle.map(
    (header, index)=>{
      return(
        <div className={styles.abilityDiv} key={`${header}${index}`}>
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
  },[themeSelected])
    
  
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
  
  return(
    <div className={styles.parentDiv}>
      {
        themeSelected != '' &&
          <div className={styles.themeInformationDiv}>
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
      }
      
      <DropDownList 
          optionType={'Theme'}
          optionsArray={themeArray}
          optionSelection={optionSelection}
          selectedOption={themeSelected}
      />
    </div>
  )
}

export default CharacterCreationThemeDisplay