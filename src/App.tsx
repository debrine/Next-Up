import CreateInitiativeCard from "./components/combat-components/CreateInitiativeCard/CreateInitiativeCard.tsx"
import Login from "./states/Login/Login.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx"
import MockForm from "./states/MockForm.tsx"
import TempNav from "./states/TempNav.tsx"

const Dashboard = ()=>{
  return(
    <div>
      <TempNav />
      <hr />
      <Outlet />
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
        path: '/Next-Up/charactersheet',
        element: <CharacterSheet />
      },
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
