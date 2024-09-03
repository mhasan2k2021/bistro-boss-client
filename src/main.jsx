import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes.jsx";
import DataProvider from "./context/ShopMenuContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DataProvider>
      <React.StrictMode>
        <div className="mx-auto max-w-screen-xl	">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </React.StrictMode>
    </DataProvider>
  </AuthProvider>
);
