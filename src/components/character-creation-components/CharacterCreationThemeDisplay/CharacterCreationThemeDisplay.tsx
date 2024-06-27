import { useContext, useEffect, useState } from 'react';
import styles from './CharacterCreationThemeDisplay.module.css'
import { themeList } from '../../../data/theme-information/themeList';
import DropDownList from '../../DropDownList/DropDownList';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter';
import BackButton from '../../../utils/BackButton/BackButton';
import NextButtonValidation from '../../../utils/NextButtonValidation';
import NextButton from '../../../utils/NextButton/NextButton';
import ShowOptions from '../../../utils/character-creation-functions/ShowOptions/ShowOptions';


function CharacterCreationThemeDisplay() {
  
  const { theme, setTheme, themeOptionsSelected, componentArrayPosition, setComponentArrayPosition, componentArray } = useContext(CharacterCreationContext)

  const themeArray: string[] = Object.keys(themeList).map((key:string)=>{
    return(key)
  });

  
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
  
  
  useEffect(()=>{
    // Set the theme object to display as user selects their theme.
    if(themeList[theme]){
      setSelectedThemeObject(themeList[theme])
    }
    // Reset the options when race changes.
    themeOptionsSelected.forEach(i=>{
      i.optionSet('')
    })
  },[theme])
  
  
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
    
  
  // Commented out in case it needs to be different from other showOptions
  // // Sets values into an array to be used for character creation.
  // function showOptions(){
  //   if(
  //     // If the theme has options to select.
  //     hasOptions
  //   ){
  //     return(
  //       optionDescription.map(
  //         (option: string, index: number)=>{
  //           return(
  //             <div className={styles.themeOptions} key={`themeOption${index}`}>
  //               <div>
  //                 {/* Display the description of the option. */}
  //                 {option}
  //               </div>
  //               <DropDownList 
  //                 optionsArray={optionArray[index]}
  //                 optionSelection={themeOptionsSelected[index].optionSet}
  //                 optionType='Option'
  //                 selectedOption={themeOptionsSelected[index].optionValue}
  //               />
  //             </div>
  //           )
  //         }
  //       )
  //     )
  //   }
  // }

  // Validation for the next button
  const [moveOn, setMoveOn] = useState<boolean>(false)

  useEffect(()=>{
    NextButtonValidation({
      optionType: theme,
      hasOptions: hasOptions,
      forEachOption: optionDescription,
      individualOptions: themeOptionsSelected,
      setMoveOn: setMoveOn
    })
  },[theme, hasOptions, themeOptionsSelected])
  
  return(
    <div className={styles.parentDiv}>
      {
        theme != '' &&
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
            {ShowOptions({
              hasOptions: hasOptions,
              optionsToMap: optionDescription,
              optionArray: optionArray,
              optionsSelectedArray: themeOptionsSelected,
              keyString: 'themeOptions',
            })}
          </div>
      }
      
      <DropDownList 
          optionType={'Theme'}
          optionsArray={themeArray}
          optionSelection={setTheme}
          selectedOption={theme}
      />
      <BackButton
        arrayPosition={componentArrayPosition}
        setArrayPosition={setComponentArrayPosition}
      />
      <NextButton
        arrayPosition={componentArrayPosition}
        setArrayPosition={setComponentArrayPosition}
        arrayToCycle={componentArray}
        condition={moveOn}
      />
    </div>
  )
}

export default CharacterCreationThemeDisplay