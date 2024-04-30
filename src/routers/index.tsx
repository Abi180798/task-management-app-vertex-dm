import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../views";
import FormTaskPage from "../views/form-task";
import { Error } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />
  },
  {
    path: "/add-task",
    element: <FormTaskPage />,
    errorElement: <Error />
  },
  {
    path: "/edit-task/:id",
    element: <FormTaskPage />,
    errorElement: <Error />
  },
]);