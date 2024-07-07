export function getValue(item: string){
    return(
        JSON.parse(localStorage.getItem(item)!)
    )
}