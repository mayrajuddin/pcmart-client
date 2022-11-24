import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <div> page error</div>,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    }
])