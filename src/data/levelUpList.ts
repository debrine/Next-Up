import FirstLevelOperative from "../components/character-class-components/operative-components/level-components/FirstLevelOperative";



export let levelUpList: {[key:string]: {[key:string]: {componentForClass: () => JSX.Element}}} = {
    '1':{
        'Operative':{
            componentForClass: FirstLevelOperative
        }
    }
}