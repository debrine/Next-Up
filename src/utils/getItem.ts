export function getItem(item: string){
    return(
        JSON.parse(localStorage.getItem(item)!)
    )
}