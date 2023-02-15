import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import History from "../Pages/History/History";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "history",
                element: <History />,
            },
        ],
    },
]);

export default routes;