import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SearchPage } from "../pages/SearchPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Dashboard } from "../pages/Dashboard";

export function RoutesMain() {
    return(
        <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/search-jobs" element={<SearchPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="/dashboard" element={<ProtectedRoute/>} >
                <Route index element={<Dashboard/>} />
            </Route>
        </Routes>
    )
}