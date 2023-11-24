import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Projects from "./Routes/Projects";
import ContactMe from "./Routes/ContactMe";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/About",
    element: <About/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Projects",
    element: <Projects/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ContactMe",
    element: <ContactMe/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
