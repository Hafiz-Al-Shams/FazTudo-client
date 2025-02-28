import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Board from "../layouts/Board";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../components/UpdateTask";
import Test from "../components/Test";


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

    // for testing DND
    {
        path: "demo",
        element: <Test></Test>,
    },


    {
        path: "update-tasks/:id",
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
        loader: ({ params }) => fetch(`https://faz-tudo-server.vercel.app/tasks/${params.id}`)
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;