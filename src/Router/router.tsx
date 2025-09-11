import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // {
            //     path: "/",
            //     element: <BiHome />,
            //     children: [
            //         { index: true, element: <HomePage /> },


            //     ],
            // },
        ],
    },
]);

export default router;
