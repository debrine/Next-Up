import firstLevelOperative from "../components/character-class-components/operative-components/level-components/firstLevelOperative";

export let levelUpList: {[key:string]: {[key:string]: {componentForClass: () => JSX.Element}}} = {
    '1':{
        'Operative':{
            componentForClass: firstLevelOperative
        }
    }
}