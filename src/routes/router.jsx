import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ViewProduct from "@/pages/ViewProduct";
import Checkout from "@/pages/Checkout";
import Cart from "@/components/shared/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ViewProduct/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);
