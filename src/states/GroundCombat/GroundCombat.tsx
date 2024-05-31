import { useState } from "react"
import CreateInitiativeCard from "../../components/combat-components/CreateInitiativeCard/CreateInitiativeCard"

function GroundCombat(){
    const [combatantArray, setCombatantArray] = useState<JSX.Element[]>([<CreateInitiativeCard />])
    

    function addCombatant(){
        setCombatantArray( [...combatantArray, <CreateInitiativeCard />])
    }
    return(
        <div>
            {combatantArray.map(combatant => (
                combatant
            ))}
            <button onClick={addCombatant}>Add Combatant</button>
        </div>
    )
}

export default GroundCombat