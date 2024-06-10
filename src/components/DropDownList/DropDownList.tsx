// Check back to see if this is going to be needed at all later.

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

  return (
    <>
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
    </>
  );
};

export default DropDownList;
