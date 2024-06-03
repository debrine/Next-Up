import CreateInitiativeCard from "./components/combat-components/CreateInitiativeCard/CreateInitiativeCard.tsx"
import Login from "./states/Login/Login.tsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx"
import MockForm from "./states/MockForm.tsx"

const router = createBrowserRouter([
  {
    path: '/Next-Up/',
    element: <Login />
  },
  {
    path: '/Next-Up/initiativetest',
    element: <CreateInitiativeCard />
  },
  {
    path: '/Next-Up/form',
    element: <MockForm />
  },
  {
    path: '/Next-Up/charactersheet',
    element: <CharacterSheet />
  },
])

function App() {
  return (
    <div className='backgroundDiv'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
