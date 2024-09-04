import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListView from "../pages/ListView/ListView";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/listView',
                element: <ListView />
            }
        ]
    }
]);