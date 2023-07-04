//import { useContext } from "react";
//import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    //const { user } = useContext(UserContext)
    const teste = true

    return teste ? <Outlet/> : <Navigate to="/" />
}