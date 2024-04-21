import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ViewProduct from "@/pages/ViewProduct";
import Checkout from "@/pages/Checkout";
import Cart from "@/components/shared/Cart";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ReturnAndRefund from "@/pages/ReturnAndRefund";
import ShippingAndDelivery from "@/pages/ShippingOrDelivery";
import ReplacementWarranty from "@/pages/ReplacementWarranty";
import AfterSaleSupport from "@/pages/AfterSaleSupport";

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
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/return-and-refund-policy",
        element: <ReturnAndRefund />,
      },
      {
        path: "/after-sale-support",
        element: <AfterSaleSupport />,
      },
      {
        path: "/shipping-or-delivery",
        element: <ShippingAndDelivery />,
      },
      {
        path: "/replacement-warranty",
        element: <ReplacementWarranty />,
      },
    ],
  },
]);
