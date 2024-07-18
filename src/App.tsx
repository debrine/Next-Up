import Login from "./states/Login/Login.tsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import CharacterSheet from "./states/CharacterSheet/CharacterSheet.tsx";
import CreateCharacter from "./states/CreateCharacter/CreateCharacter.tsx";
import NavBar from "./states/NavBar/NavBar.tsx";

const Dashboard = () => {
  return (
    <div className="appParent">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="outletBody">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/Next-Up/charactersheet/:characterID",
        element: <CharacterSheet />,
      },
      {
        path: "/Next-Up/",
        element: <Login />,
      },
      {
        path: "/Next-Up/create-character",
        element: <CreateCharacter />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="backgroundDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
