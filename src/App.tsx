import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import CreateAccout from "./routes/CreateAccout";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { auth } from "./firebase";

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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
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
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    //wait for firebase
    await auth.authStateReady();
    setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
