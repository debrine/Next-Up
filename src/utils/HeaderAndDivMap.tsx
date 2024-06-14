type HeaderAndDivMapProps ={
    headerArray: string[];
    divArray: string[];
    divClassName: CSSModuleClasses[string]
}

// Test this out later. Might have to change approach
function HeaderAndDivMap({
    headerArray,
    divArray,
    divClassName
}:HeaderAndDivMapProps) {
    headerArray.map(
        (header, index)=>{
          return(
            <div className={divClassName}>
                    <h3>{header}</h3>
                    <div>{divArray[index]}</div>
                </div>
          )
        }
      )
}

export default HeaderAndDivMap