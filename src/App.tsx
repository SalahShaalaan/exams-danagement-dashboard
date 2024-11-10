import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Students from "./pages/Students";
import Calender from "./pages/Calender";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Admins from "./pages/Admins";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/login/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute allowedRoles={["admin", "superadmin"]} />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "students",
            element: <Students />,
          },
          {
            path: "calendar",
            element: <Calender />,
          },
          {
            path: "print-results",
            element: <Results />,
          },
          {
            path: "admins",
            element: <ProtectedRoute allowedRoles={["superadmin"]} />,
            children: [
              {
                index: true,
                element: <Admins />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
