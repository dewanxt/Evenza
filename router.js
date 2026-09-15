import { createBrowserRouter } from "react-router";
import Home from "./src/Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, Component: Home }
        ],
    },
]);