import FirstLevelOperative from "../components/character-class-components/operative-components/level-components/FirstLevelOperative";



export let levelUpList: {[key:string]: {[key:string]: {componentForClass: (key:string)=>JSX.Element}}} = {
    '1':{
        'Operative':{
            componentForClass: (key)=>FirstLevelOperative(key)
        }
    }
}