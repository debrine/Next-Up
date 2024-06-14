import { useState } from "react";


type DropDownProps = {
  optionType: string
  optionsArray: string[];
  optionSelection: Function;
  selectedOption: string;
  index?:number
};

const DropDownList: React.FC<DropDownProps> = ({
  optionType,
  optionsArray,
  optionSelection,
  selectedOption
}: DropDownProps): JSX.Element => {

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

    // Toggle Drop Down
    const toggleDropDown = ()=>{
      setShowDropDown(!showDropDown)
  }

  // Dismiss showing options.
  const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void =>{
      if(e.currentTarget === e.target) {
          setShowDropDown(false)
      }
  }

  return (
    <>
      <button
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
      >
        <div>{
          selectedOption !='' &&
          selectedOption != undefined ?
          `${optionType}: ${selectedOption}` :
          `${optionType}...`
        }</div> 
        {showDropDown && (
          <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {optionsArray.map(
              (option: string, index: number): JSX.Element => {
                return (
                  <p
                    key={index}
                    onClick={(): void => {
                      optionSelection(option);
                    }}
                  >
                    {option}
                  </p>
                );
              }
            )}
          </div>
        )}
      </button>
    </>
  );
};

export default DropDownList;
