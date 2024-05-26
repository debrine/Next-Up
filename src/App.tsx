// import CreateInitiativeCard from "./components/combat-components/CreateInitiativeCard/CreateInitiativeCard.tsx"
// import Login from "./states/Login/Login.tsx"
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx"
import MockForm from "./states/MockForm.tsx"

function App() {
  return (
    <div className='backgroundDiv'>
      {/* <Login /> */}
      {/* <CreateInitiativeCard/> */}
      <MockForm />
      <CharacterSheet />
    </div>
  )
}

export default App
