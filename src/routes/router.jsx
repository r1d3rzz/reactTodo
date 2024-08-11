import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Todos from "../components/Todos";
import Create from "../pages/Todo/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
]);

export default router;
