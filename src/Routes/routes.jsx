import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import SignIn from "../pages/OurMenu/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import OneProduct from "../pages/OurShop/OneProduct/OneProduct";
import AddCart from "../pages/AddCart/AddCart";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MainDashboard from "../Layout/Dashboard/MainDashboard/MainDashboard";
import ReservationForm from "../Layout/Dashboard/ReservationForm/ReservationForm";
import MyCart from "../Layout/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },

      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/dish/:id",
        element: (
          <PrivetRoute>
            <OneProduct></OneProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/add-cart",
        element: (
          <PrivetRoute>
            <AddCart></AddCart>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/user-home",
        element: <MainDashboard />,
      },
      {
        path: "/dashboard/reservation",
        element: <ReservationForm />,
      },
      {
        path: "/dashboard/my-cart",
        element: <MyCart />,
      },
    ],
  },
  {
    path: "*",
    element: <div>this page not found</div>,
  },
]);
