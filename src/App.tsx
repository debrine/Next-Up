import CreateInitiativeCard from "./components/combat-components/CreateInitiativeCard/CreateInitiativeCard.tsx"
import Login from "./states/Login/Login.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx"
import MockForm from "./states/MockForm.tsx"
import CreateCharacter from "./states/CreateCharacter/CreateCharacter.tsx"
import FirstLevelOperative from "./components/character-class-components/operative-components/level-components/FirstLevelOperative.tsx"
import NavBar from "./states/NavBar/NavBar.tsx"

const Dashboard = ()=>{
  return(
    <div className="appParent">
      <div className="navBar"><NavBar /></div>
      <div className="outletBody"><Outlet /></div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
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
        path: '/Next-Up/charactersheet/:characterID',
        element: <CharacterSheet />
      },
      {
        path: '/Next-Up/create-character',
        element: <CreateCharacter />
      },
      {
        path: '/Next-Up/operative-first',
        element: <FirstLevelOperative />
      }
    ]
  }
  
])

function App() {
  return (
    <div className='backgroundDiv'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
