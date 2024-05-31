// import CreateInitiativeCard from "./components/combat-components/CreateInitiativeCard/CreateInitiativeCard.tsx"
// import Login from "./states/Login/Login.tsx"
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx"
import GroundCombat from "./states/GroundCombat/GroundCombat.tsx"
import MockForm from "./states/MockForm.tsx"

function App() {
  return (
    <div className='backgroundDiv'>
      {/* <Login /> */}
      {/* <CreateInitiativeCard/> */}
      <GroundCombat />
      <MockForm />
      <CharacterSheet />
    </div>
  )
}

export default App
