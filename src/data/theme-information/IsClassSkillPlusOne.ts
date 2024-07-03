function IsClassSkillPlusOne(keyID: KeyIDType, skillName: string) {
    let skill = JSON.parse(localStorage.getItem(`${skillName}${keyID}`)!)
    if(skill.isClassSkill){
        skill.value++
    } else {
        skill.isClassSkill = true
    }
    localStorage.setItem(`${skillName}${keyID}`, JSON.stringify(skill))
}

export default IsClassSkillPlusOne