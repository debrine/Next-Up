// Skill - Piloting
// Ability Score - Dex

export default function AcePilotAdjustments(
    keyID: ThemeTypes
){
    // Dex
    let ability = JSON.parse(localStorage.getItem(`Dexterity${keyID}`)!)
    ability.asValue++
    localStorage.setItem(`Dexterity${keyID}`, JSON.stringify(ability))

    // Piloting
    let skill = JSON.parse(localStorage.getItem(`Piloting${keyID}`)!)
    if(skill.isClassSkill){
        skill.skillValue++
    } else {
        skill.isClassSkill = true
    }
    localStorage.setItem(`Piloting${keyID}`, JSON.stringify(skill))
}