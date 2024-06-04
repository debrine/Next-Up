import React, { useEffect, useState } from 'react';

type DropDownProps = {
  optionsArray: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
};

const DropDownList: React.FC<DropDownProps> = ({
  optionsArray,
  optionSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

//   Handle passing the option back to the parent component
  const onClickHandler = (option: string): void => {
    optionSelection(option);
    console.log(option)
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {optionsArray.map(
          (option: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(option);
                }}
              >
                {option}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDownList;
