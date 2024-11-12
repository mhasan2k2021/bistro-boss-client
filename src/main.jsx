import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes.jsx";
import DataProvider from "./context/ShopMenuContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <React.StrictMode>
          <div>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </React.StrictMode>
      </DataProvider>
    </QueryClientProvider>
  </AuthProvider>
);
