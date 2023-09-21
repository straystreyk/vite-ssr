import App from "./components/App";
import { json, RouteObject } from "react-router-dom";


export const routes: RouteObject[] =  [
    {
        path: "/",
        element: <App/>,
        loader() {
           return json({ message: "Welcome to React Router!" });
        },
    }, {
        path: "/home",
        element: <div>home</div>,
        loader({ request, context }) {
            console.log(request, context);
        },
    },
]

