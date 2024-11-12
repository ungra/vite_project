import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  BrowerRouter,
  Switch,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import CreateAccout from "./routes/CreateAccout";
import Layout from "./components/Layout";

const GlobalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}
  body {
  background-color:black;
  color:white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccout />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
