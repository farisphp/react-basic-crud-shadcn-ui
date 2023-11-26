import { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/pages/Home.tsx";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = (props: PropsWithChildren) => {
  const [cookie] = useCookies();
  if (!cookie.accessToken) {
    return <Navigate to="/login" />;
  }

  return props.children as JSX.Element;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
