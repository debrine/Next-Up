

type DropDownProps = {
  optionsArray: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
};

const DropDownList: React.FC<DropDownProps> = ({
  optionsArray,
  showDropDown,
  optionSelection,
}: DropDownProps): JSX.Element => {

//   Handle setting the option from the parent component
  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

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
