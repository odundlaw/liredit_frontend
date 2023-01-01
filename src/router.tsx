import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import LoginContainer from "./pages/Login/LoginContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{
      element: <Home />,
      index: true
    }],
  },
  { element: <LoginContainer />, path: "/login" },
]);
