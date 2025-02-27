import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Board from "../layouts/Board";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../components/UpdateTask";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
    {
        path: "my-tudo-board",
        element: <PrivateRoute><Board></Board></PrivateRoute>,
    },
    {
        path: "update-tasks/:id",
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;