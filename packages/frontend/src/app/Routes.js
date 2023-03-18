import { Navigate, useRoutes } from "react-router-dom"
import Traffic from "../../pages/Traffic";
import Overview from "../../pages/Overview";
import Csv from "../../pages/CSV";

const routes = [
    {
        path: "",
        element: <Navigate to="/traffic"/>,
    },
    {
        path: "/traffic",
        element: <Traffic></Traffic>,
    },
    {
        path: "/overview",
        element: <Overview></Overview>,
    },
    {   
        path: "/csv",
        element: <Csv></Csv>,
    }
]

const Routes = () => useRoutes(routes);

export default Routes;