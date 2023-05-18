import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../pages/Details";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);
