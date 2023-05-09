import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Update from "../pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffe-store-server.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`https://coffe-store-server.vercel.app/${params.id}`),
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://coffe-store-server.vercel.app/${params.id}`),
      },
    ],
  },
]);

export default router;
